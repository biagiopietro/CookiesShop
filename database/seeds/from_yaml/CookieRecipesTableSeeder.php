<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Symfony\Component\Yaml\Yaml;


define("COOKIE_RECIPES_FILE_YAML", "database/seeds/from_yaml/cookie_recipes.yaml");
define("COOKIE_RECIPES", "cookie_recipes");
define("COOKIE_ID", "cookie_id");
define("INGREDIENT_ID", "ingredient_id");
class CookieRecipesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $cookieRecipesYaml = $this->loadCookieRecipesYaml();
        if ($this->isFileYamlIsNotEmpty($cookieRecipesYaml)) {
            if ($this->checkIfFileYamlStartsCorrectly($cookieRecipesYaml)) {
                $cookieRecipes = $cookieRecipesYaml[COOKIE_RECIPES];
                Log::info("Start seeding cookie recipes");
                $countLoadedCookieRecipes = $this->startSeedingCookieRecipes($cookieRecipes);
                $this->printCountLoadedCookieRecipes($countLoadedCookieRecipes);
            } else {
                Log::error(sprintf("Missing '%s' attribute in yaml", COOKIE_RECIPES));
            }
        } else {
            Log::error(sprintf("The file '%s' is empty", COOKIE_RECIPES_FILE_YAML));
        }
    }

    private function isFileYamlIsNotEmpty($cookieRecipesYaml)
    {
        return ($cookieRecipesYaml != null && count($cookieRecipesYaml) > 0);
    }

    private function checkIfFileYamlStartsCorrectly($cookieRecipesYaml)
    {
        return array_key_exists(COOKIE_RECIPES, $cookieRecipesYaml);
    }

    private function startSeedingCookieRecipes($cookieRecipes)
    {
        $i = 1;
        $countLoadedCookieRecipes = 0;
        foreach ($cookieRecipes as $cookieRecipe) {
            if ($this->checkIfCookieRecipeHasAllFields($cookieRecipe))
            {
                $this->insertCookieRecipe($cookieRecipe);
                $countLoadedCookieRecipes ++;
            } else {
                Log::warning(sprintf("Missing some fields at index %d",$i));
            }
            $i++;
        }
        return $countLoadedCookieRecipes;
    }

    private function printCountLoadedCookieRecipes($countLoadedCookieRecipes)
    {
        if ($countLoadedCookieRecipes == 0) {
            Log::warning(sprintf("Loaded %d cookie recipes.",$countLoadedCookieRecipes));
        } else {
            Log::info(sprintf("Loaded %d cookie recipe\s.",$countLoadedCookieRecipes));
        }
    }

    private function insertCookieRecipe($cookie)
    {
        DB::table('cookie_recipes')->insert([
            'cookie_id' => $this->getIdForHerokuMysqlProvider($cookie[COOKIE_ID]),
            'ingredient_id' => $this->getIdForHerokuMysqlProvider($cookie[INGREDIENT_ID]),
        ]);
    }

    private function checkIfCookieRecipeHasAllFields($cookieRecipe)
    {
        return (array_key_exists(COOKIE_ID, $cookieRecipe) &&
            array_key_exists(INGREDIENT_ID, $cookieRecipe));
    }


    private function getIdForHerokuMysqlProvider($id)
    {
        return ($id * 10 ) + 1;
    }

    private function loadCookieRecipesYaml()
    {
        return Yaml::parse(file_get_contents(COOKIE_RECIPES_FILE_YAML));
    }
}
