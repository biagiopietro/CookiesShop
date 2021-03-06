<p align="center"><img src="https://images.unsplash.com/photo-1548848221-0c2e497ed557?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" width="400" alt="Avatar"></p>

Table of Contents
=================
* [Table of Contents](#table-of-contents)
  * [Cookies Shop](#cookies-shop)
  * [Cookies Shop online](#cookies-shop-online)
  * [Powered by](#powered-by)
  * [Seed](#seed)
     * [Cookies Seeder](#cookies-seeder)
     * [Ingredients Seeder](#ingredients-seeder)
     * [Cookie Recipes Seeder](#cookie-recipes-seeder)
  * [Testing](#testing)
     * [Unit test](#unit-test)
     * [Dusk test](#dusk-test)
     * [Demo of Running Dusk Tests on Google Chrome](#demo-of-running-dusk-tests-on-google-chrome)
  * [Docker](#docker)
     * [Build](#build)
     * [Run](#run)
     * [Too lazy to build and run from your own?](#too-lazy-to-build-and-run-from-your-own)
  * [Docker-compose](#docker-compose)
  * [Kubernetes](#kubernetes)
  * [License](#license)

## Cookies Shop
This is a simple Cookies shop application written using Laravel as framework.

## Cookies Shop online
Too lazy to try Cookies Shop project locally?
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
<a href="https://tailwindcss.com" class="logo">
    <img class="mark" src="https://img.stackshare.io/service/8158/E1G1nNb0_400x400.jpg" width="70"  alt="TailwindCss">
</a>
&nbsp;

<a href="https://vuejs.org" class="logo">
    <img class="mark" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/800px-Vue.js_Logo_2.svg.png"  width="70" alt="VueJs">
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

### Unit test
- Run ```cd CookiesShop/``` to move into ```CookiesShop``` folder;
- Run ```vendor/bin/phpunit  tests/Unit```.

### Dusk test
You can run ```laravel dusk``` tests so you need to:
- Make sure you have installed ```Google Chrome``` browser.
    - _[TIP]_ In ```Linux``` systems you can run ```sudo apt install chromium-browser```.
    - ```[OPTIONAL]``` If you want to test using other browser please visit [Laravel-Dusk#Using Other Browsers](https://laravel.com/docs/5.8/dusk#using-other-browsers).
- Create a new database for testing.
    - _[TIP]_ You can follow [this guide](https://linuxize.com/post/how-to-create-mysql-user-accounts-and-grant-privileges/) to create users and databases in ```MySQL```. 
- Create your own ```.env.dusk.local```;
    - _[TIP]_ In ```Linux``` systems you can run ```mv .env.dusk.local.example .env.dusk.local```.
- Run migrations and seeds in the database (specified in ```.env.dusk.local```) used for the tests.
    - ```php artisan migrate --env=dusk.local ```;
    - ```php artisan db:seed --env=dusk.local ```.
- Start the server: ```php artisan serve --env=dusk.local --port=<port_specified_in_APP_URL_key_inside_env_dusk_dot_local>```;
- Start dusk tests: ```php artisan dusk``` .
 
**Note**
<br/>
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

![](https://i.imgur.com/jETfIP7.gif)

## Docker
I also provided a ```Dockerfile``` to containerize this laravel project.

### Build
- Run ```cd CookiesShop/``` to move into ```CookiesShop``` folder;
- Comment these lines (or in alternative you can set the ```APP_ENV``` variable to avoid the below check):
 <br/>
 
 ```php
    if ($this->app->environment('local', 'testing', 'staging')) {
        $this->app->register(DuskServiceProvider::class);
    }
```
  The above lines are inside the ```register``` method in ```app/Providers/AppServiceProvider.php``` file. 
  <br/>
  You need to do that because the ```dusk's``` files are ignored by the ```.dockerignore``` file.
- Run ```docker build . -t cookies_shop```;
- Make sure that the image is created, so run ```docker images | grep cookies_shop```;

**Note**
<br/>
The generated Docker image only connects with ```MySQL``` databases. 
If you need other connections feel free to chain them in the ```RUN``` attribute.
<br/>
For example if you need to use ```Redis``` you need to edit the ```Dockerfile``` as follow:
<br/>
```dockerfile
    RUN chown -R www-data:www-data /app \
        && docker-php-ext-install mysqli pdo pdo_mysql redis \
        && a2enmod rewrite
```

### Run
- Run ``` docker run -it --env-file .env --network=host --name cookies_shop cookies_shop ``` to run the docker image;

**IMPORTANT**
- The ```APP_ENV``` variable inside the ```.env``` file cannot be: `local`, `testing` or `staging` otherwise you will see ```Class 'Laravel\Dusk\DuskServiceProvider' not found``` error;
- The flag ```--network=host``` needs to share the ```host``` network with the container. In this way you can able to connect the laravel application running in the container with the ```MySQL``` database inside your ```local``` machine.
- **Don't forget** to run migrations and seeds inside the container.

### Too lazy to build and run from your own?
No problem!!! You can pull a [fresh Docker image](https://hub.docker.com/repository/docker/biagiopietro/cookies_shop) and run it as follow:
```
    docker run -it --env-file .env --network=host --name cookies_shop biagiopietro/cookies_shop
```
<br/>

**Note**
<br/>
The pulled image connects only with ```MySQL``` databases. If you need to connect to other databases you will need to:
- Edit the source code;
- Run tests ```[Optional]```;
- Build the Docker image;
- Run the created image.

## Docker-compose
You can run ```Cookies Shop + MySQL``` using ```docker-compose```.
<br/>
Let's start:
- Run ```cd CookiesShop/``` to move where the ```docker-compose.yml``` is located;
- Run ```mv .env.example .env``` to create your own ```.env``` because it will be **injected** into the Cookies Shop container;
- Run ```docker-compose up```;
- Run ```cat cookies_shop_dump.sql | docker exec -i <mysql-container> /usr/bin/mysql -u <MYSQL-USER> --password=<MYSQL-PASSWORD>  <MYSQL-DATABASE>``` to fill the database inside the mysql container.
    - Example: ```cat cookies_shop_dump.sql | docker exec -i mysql /usr/bin/mysql -u user --password=password  cookies_shop```.

## Kubernetes
You can run ```Cookies Shop + MySQL``` using ```Kubernetes```; this means that you have at least ```minikube``` installed.
<br/>
Let's start:
- By default the ```biagiopietro/cookies_shop``` Docker image is used inside the ```kubernetes/cookies-shop.yaml``` but if you want you can:
    - Follow [this guide](https://dzone.com/articles/running-local-docker-images-in-kubernetes-1) to build the Cookies Shop Docker image inside the ```minikube``` environment; 
    - Otherwise you can publish the Docker image in your Docker Registry and use it inside the ```kubernetes/cookies-shop.yaml``` file.
- Run ```cd CookiesShop/kubernetes``` to move where the ```k8s manifests``` are located;
- Edit environment variables inside the ```env-config-map.yaml```.
- Edit secrets inside ```secrets.yaml```;
    - Each value can be generated by running the following command: ```echo -n "<value>" | bash64```. For Example ```echo -n "user" | base64```.
- Edit ```env``` variables inside ```kubernetes/env-config-map.yaml```;
- Run ```kubectl apply -f ingress.yaml,secrets.yaml,env-config-map.yaml,mysql.yaml,cookies-shop.yaml```;
- Run ```kubectl get ing -n default``` and you will see something like that:
```
NAME                   HOSTS             ADDRESS          PORTS   AGE
cookies-shop-ingress   cookies.shop.it   192.168.39.110   80      38m
```

- Add in your ```/etc/hosts``` this line: ```<ip> cookies.shop.it ```. In this case ```192.168.39.110 cookies.shop.it```.
- Run ```minikube dashboard``` to check if everything is running.
- Open a browser and type ``http://cookies.shop.it``.


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
