<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Support\Facades\Session;

Route::get('/', function () {
    return view('carousel');
});

Route::get('/cookies', 'CookieController@index');
Route::get('/cookies/{id}/ingredients', 'CookieController@ingredients');
Route::get('/ingredients', 'IngredientController@index');

Route::get('/{locale}', function ($locale) {
    if ($locale != 'en' && $locale != 'it')
    {
        $locale = 'en';
    }
    Session::put('locale',$locale);
    return redirect()->back();
});
