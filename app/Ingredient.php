<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ingredient extends Model
{
    //
    protected $table = 'ingredients';
    protected $primaryKey = 'id';
    protected $casts = [
        'is_veggie' => 'boolean',
        'is_vegan' => 'boolean',
    ];

    public function getAllCookies()
    {
        return $this->belongsToMany('App\Cookie','cookie_recipes');
    }

    public static function getNotDeletedIngredients()
    {
        return Ingredient::where('is_deleted',false);
    }


    public function getNotDeletedCookies()
    {
        return  $this->getAllCookies()->where('is_deleted',false);
    }

    public function getDeletedCookies()
    {
        return  $this->getAllCookies()->where('is_deleted',true);
    }

    public function isVeggie()
    {
        return $this->is_veggie;
    }

    public function isVegan()
    {
        return $this->is_vegan;
    }

    public function isDeleted()
    {
        return $this->is_deleted;
    }
}
