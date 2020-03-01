<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ingredient extends Model
{
    //
    protected $table = 'ingredients';
    protected $primaryKey = 'id';

    public function getCookies()
    {
        return $this->belongsToMany('App\Cookie','cookie_recipes');
    }

}
