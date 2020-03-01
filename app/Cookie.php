<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cookie extends Model
{
    //
    protected $table = 'cookies';
    protected $primaryKey = 'id';

    public function getIngredients()
    {
        return $this->belongsToMany('App\Ingredient','cookie_recipes');
    }
}
