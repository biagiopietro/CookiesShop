<p align="center"><img src="https://images.unsplash.com/photo-1548848221-0c2e497ed557?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" width="400" alt="Avatar"></p>

## Cookies Shop
This is a simple Cookies shop application written using Laravel as framework.

## Cookies Shop online
Too lazy to test Cookies Shop project locally?
Don't worry! 
Try it online [Cookies Shop](http://cookies-shop.herokuapp.com)!!!

## Powered by

<a href="https://www.jetbrains.com/phpstorm/" class="logo">
    <img class="mark" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Phpstorm.png/800px-Phpstorm.png" width="70" alt="PhpStorm">
</a>
&nbsp;
<a href="https://laravel.com" class="logo">
    <img class="mark" src="https://laravel.com/img/logomark.min.svg" alt="Laravel"><img class="type" src="https://laravel.com/img/logotype.min.svg" alt="Laravel">
</a>
&nbsp;
<a href="https://laravel.com/docs/7.x/dusk" class="logo">
    <img class="mark" src="https://miro.medium.com/max/2200/1*98DMDTtATw-dbbmyfSTkQw.png" width="150" alt="Laravel Dusk">
</a>
&nbsp;
<a href="https://heroku.com" class="logo">
    <img class="mark" src="https://upload.wikimedia.org/wikipedia/en/a/a9/Heroku_logo.png" width="150" alt="Avatar">
</a>

## Seed
Each seeder loads all data from ```.yaml``` files inside  ```app/database/seeds/from_yaml``` folder.

### Cookies Seeder
The ```CookiesTableSeeder.php``` loads the cookies data from ```app/database/seeds/from_yaml/cookies.yaml``` and each ```cookie``` has this structure:
```yaml
cookies:
  - id: <id> # 1
    name: <name> # Sweety Cookie
    weight: <number> # 12.5
    calories: <number> # 225.0
    .
    .
    .
```
**IMPORTANT**
<br/>
If you take care about the ```id``` of each row you need to change the ```insertCookie``` method inside the ```CookieTableSeeder.php``` 
<br/>
From:

```php
    private function insertCookie($cookie)
    {
        DB::table('cookies')->insert([
            'id' => $this->getIdForHerokuMysqlProvider($cookie[COOKIES_ID]),
            'name' => $cookie[COOKIES_NAME],
            'weight' => $cookie[COOKIES_WEIGHT],
            'calories' => $cookie[COOKIES_CALORIES],
        ]);
    }
```
<br/>
To:

```php
    private function insertCookie($cookie)
    {
        DB::table('cookies')->insert([
            'id' => $cookie[COOKIES_ID],
            'name' => $cookie[COOKIES_NAME],
            'weight' => $cookie[COOKIES_WEIGHT],
            'calories' => $cookie[COOKIES_CALORIES],
        ]);
    }
```

### Ingredients Seeder
The ```IngredientsTableSeeder.php``` loads the ingredients data from ```app/database/seeds/from_yaml/ingredients.yaml``` and each ```ingredient``` has this structure:
```yaml
ingredients:
  - id: <id> # 1
    name: <name> # Butter
    is_veggie: <boolean> # true
    is_vegan: <boolean> # false
    .
    .
    .
```
**IMPORTANT**
<br/>
If you take care about the ```id``` of each row you need to change the ```insertIngredient``` method inside the ```IngredientTableSeeder.php``` 
<br/>
From:

```php
    private function insertIngredient($ingredient)
    {
        DB::table('ingredients')->insert([
            'id' => $this->getIdForHerokuMysqlProvider($ingredient[INGREDIENTS_ID]),
            'name' => $ingredient[INGREDIENTS_NAME],
            'is_veggie' => $ingredient[INGREDIENTS_IS_VEGGIE],
            'is_vegan' => $ingredient[INGREDIENTS_IS_VEGAN],
        ]);
    }
```
<br/>
To:

```php
    private function insertIngredient($ingredient)
    {
        DB::table('ingredients')->insert([
            'id' => $ingredient[INGREDIENTS_ID],
            'name' => $ingredient[INGREDIENTS_NAME],
            'is_veggie' => $ingredient[INGREDIENTS_IS_VEGGIE],
            'is_vegan' => $ingredient[INGREDIENTS_IS_VEGAN],
        ]);
    }
```

### Cookie Recipes Seeder
The ```CookieRecipesTableSeeder.php``` loads the cookie recipes data from ```app/database/seeds/from_yaml/cookie_recipes.yaml``` and each ```cookie recipe``` has this structure:
```yaml
cookie_recipes:
  - cookie_id: <cookie_id> # 1
    ingredient_id: <ingredient_id> # 2
  - cookie_id: <cookie_id> # 1
    ingredient_id: <ingredient_id> # 1
  - cookie_id: <cookie_id> # 1
    ingredient_id: <ingredient_id> # 4
    .
    .
    .
```
<br/>

If you take care about the ```id``` of each row you need to change the ```insertCookieRecipe``` method inside the ```CookieRecipesTableSeeder.php``` 
<br/>
From:

```php
    private function insertCookieRecipe($cookie)
    {
        DB::table('cookie_recipes')->insert([
            'cookie_id' => $this->getIdForHerokuMysqlProvider($cookie[COOKIE_ID]),
            'ingredient_id' => $this->getIdForHerokuMysqlProvider($cookie[INGREDIENT_ID]),
        ]);
    }
```
<br/>
To:

```php
    private function insertCookieRecipe($cookie)
    {
        DB::table('cookie_recipes')->insert([
            'cookie_id' => $cookie[COOKIE_ID],
            'ingredient_id' => $cookie[INGREDIENT_ID],
        ]);
    }
```

## Testing
You can run ```laravel dusk``` tests so you need to:
- Make sure you have installed ```Google Chrome``` browser.
    - In ```Linux``` systems you can run ```sudo apt install chromium-browser```.
  <br/>
  **Note**
  <br/>
  If you want to test using other browser please visit [Laravel-Dusk#Using Other Browsers](https://laravel.com/docs/5.8/dusk#using-other-browsers).
- Create your own ```.env.dusk.local```;
- Run migrations and seeds in the database (specified in ```.env.dusk.local```) used for the tests.
    - ```php artisan migrate --env=dusk.local ```;
    - ```php artisan db:seed --env=dusk.local ```.
- Start the server: ```php artisan serve --env=dusk.local --port=<port_specified_in_APP_URL_key_inside_env_dusk_dot_local>```;
- Start dusk tests: ```php artisan dusk``` .

**Note**
If you want to see the selected browser running the ```dusk``` tests you need to comment ```--disable-gpu``` and ```--headless``` in ```~/CookiesShop/tests/DuskTestCase.php```.
<br/>

For example:
```php
    protected function driver()
    {
        $options = (new ChromeOptions)->addArguments([
//            '--disable-gpu',
//            '--headless',
            '--no-sandbox',
            '--verbose',
            '--window-size=1920,1080',
        ]);

        return RemoteWebDriver::create(
            'http://localhost:9515', DesiredCapabilities::chrome()->setCapability(
                ChromeOptions::CAPABILITY, $options
            )
        );
    }
```
### Demo of Running Dusk Tests on Google Chrome

![](https://i.imgur.com/uq1cufg.gifv)

## License
This application is open-sourced software licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0).

```
  Copyright 2020 biagiopietro

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
```
