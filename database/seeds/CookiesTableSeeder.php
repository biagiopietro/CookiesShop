<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Symfony\Component\Yaml\Yaml;

define("COOKIES_FILE_YAML", "database/seeds/from_yaml/cookies.yaml");
define("COOKIES", "cookies");
define("COOKIES_NAME", "name");
define("COOKIES_WEIGHT", "weight");
define("COOKIES_CALORIES", "calories");
class CookiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $cookiesYaml = $this->loadCookiesYaml();
        if ($this->isFileYamlIsNotEmpty($cookiesYaml)) {
            if ($this->checkIfFileYamlStartsCorrectly($cookiesYaml)) {
                $ingredients = $cookiesYaml[COOKIES];
                Log::info("Start seeding cookies");
                $countLoadedCookies = $this->startSeedingCookies($ingredients);
                $this->printCountLoadedCookies($countLoadedCookies);
            } else {
                Log::error(sprintf("Missing '%s' attribute in yaml", COOKIES));
            }
        } else {
            Log::error(sprintf("The file '%s' is empty", COOKIES_FILE_YAML));
        }
    }

    private function isFileYamlIsNotEmpty($ingredientsYaml)
    {
        return ($ingredientsYaml != null && count($ingredientsYaml) > 0);
    }

    private function checkIfFileYamlStartsCorrectly($cookiesYaml)
    {
        return array_key_exists(COOKIES, $cookiesYaml);
    }

    private function startSeedingCookies($cookies)
    {
        $i = 1;
        $countLoadedCookies = 0;
        foreach ($cookies as $cookie) {
            if ($this->checkIfCookieHasAllFields($cookie))
            {
                $this->insertCookie($cookie);
                $countLoadedCookies ++;
            } else {
                Log::warning(sprintf("Missing some fields at index %d",$i));
            }
            $i++;
        }
        return $countLoadedCookies;
    }

    private function printCountLoadedCookies($countLoadedCookies)
    {
        if ($countLoadedCookies == 0) {
            Log::warning(sprintf("Loaded %d cookie.",$countLoadedCookies));
        } else {
            Log::info(sprintf("Loaded %d cookie\s.",$countLoadedCookies));
        }
    }

    private function insertCookie($cookie)
    {
        DB::table('cookies')->insert([
            'name' => $cookie[COOKIES_NAME],
            'weight' => $cookie[COOKIES_WEIGHT],
            'calories' => $cookie[COOKIES_CALORIES],
        ]);
    }

    private function checkIfCookieHasAllFields($cookie)
    {
        return (array_key_exists(COOKIES_NAME, $cookie) &&
            array_key_exists(COOKIES_WEIGHT, $cookie) &&
            array_key_exists(COOKIES_CALORIES, $cookie));
    }

    private function loadCookiesYaml()
    {
        return Yaml::parse(file_get_contents(COOKIES_FILE_YAML));
    }
}
