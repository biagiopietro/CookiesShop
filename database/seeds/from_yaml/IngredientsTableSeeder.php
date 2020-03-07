<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Symfony\Component\Yaml\Yaml;

define("INGREDIENTS_FILE_YAML", "database/seeds/from_yaml/ingredients.yaml");
define("INGREDIENTS", "ingredients");
define("INGREDIENTS_ID", "id");
define("INGREDIENTS_NAME", "name");
define("INGREDIENTS_IS_VEGGIE", "is_veggie");
define("INGREDIENTS_IS_VEGAN", "is_vegan");

class IngredientsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $ingredientsYaml = $this->loadIngredientsYaml();
        if ($this->isFileYamlIsNotEmpty($ingredientsYaml)) {
            if ($this->checkIfFileYamlStartsCorrectly($ingredientsYaml)) {
                $ingredients = $ingredientsYaml[INGREDIENTS];
                Log::info("Start seeding ingredients");
                $countLoadedIngredients = $this->startSeedingIngredients($ingredients);
                $this->printCountLoadedIngredients($countLoadedIngredients);
            } else {
                Log::error(sprintf("Missing '%s' attribute in yaml", INGREDIENTS));
            }
        } else {
            Log::error(sprintf("The file '%s' is empty", INGREDIENTS_FILE_YAML));
        }
    }

    private function isFileYamlIsNotEmpty($ingredientsYaml)
    {
        return ($ingredientsYaml != null && count($ingredientsYaml) > 0);
    }

    private function checkIfFileYamlStartsCorrectly($ingredientsYaml)
    {
        return array_key_exists(INGREDIENTS, $ingredientsYaml);
    }

    private function startSeedingIngredients($ingredients)
    {
        $i = 1;
        $countLoadedIngredients = 0;
        foreach ($ingredients as $ingredient) {
            if ($this->checkIfIngredientHasAllFields($ingredient))
            {
                $this->insertIngredient($ingredient);
                $countLoadedIngredients ++;
            } else {
                Log::warning(sprintf("Missing some fields at index %d",$i));
            }
            $i++;
        }
        return $countLoadedIngredients;
    }

    private function printCountLoadedIngredients($countLoadedIngredients)
    {
        if ($countLoadedIngredients == 0) {
            Log::warning(sprintf("Loaded %d ingredients.",$countLoadedIngredients));
        } else {
            Log::info(sprintf("Loaded %d ingredient\s.",$countLoadedIngredients));
        }
    }

    private function insertIngredient($ingredient)
    {
        DB::table('ingredients')->insert([
            'id' => $this->getIdForHerokuMysqlProvider($ingredient[INGREDIENTS_ID]),
            'name' => $ingredient[INGREDIENTS_NAME],
            'is_veggie' => $ingredient[INGREDIENTS_IS_VEGGIE],
            'is_vegan' => $ingredient[INGREDIENTS_IS_VEGAN],
        ]);
    }

    private function checkIfIngredientHasAllFields($ingredient)
    {
        return (array_key_exists(INGREDIENTS_NAME, $ingredient) &&
            array_key_exists(INGREDIENTS_ID, $ingredient) &&
            array_key_exists(INGREDIENTS_IS_VEGGIE, $ingredient) &&
            array_key_exists(INGREDIENTS_IS_VEGAN, $ingredient));
    }

    private function getIdForHerokuMysqlProvider($id)
    {
        return ($id * 10 ) + 1;
    }

    private function loadIngredientsYaml()
    {
        return Yaml::parse(file_get_contents(INGREDIENTS_FILE_YAML));
    }
}
