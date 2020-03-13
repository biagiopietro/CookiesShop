<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cookie extends Model
{
    //
    protected $table = 'cookies';
    protected $primaryKey = 'id';
    protected $appends = ['is_veggie','is_vegan'];
    protected $attributes = ['is_veggie','is_vegan'];

    public function getAllIngredients()
    {
        return $this->belongsToMany('App\Ingredient','cookie_recipes');
    }

    public function getDeletedIngredients()
    {
        return $this->getAllIngredients()->where('ingredients.is_deleted',true);
    }

    public function getNotDeletedIngredients()
    {
        return $this->getAllIngredients()->where('ingredients.is_deleted',false);
    }

    public static function getNotDeletedCookies()
    {
        return Cookie::where('is_deleted',false);
    }


    public function getIsVeggieAttribute()
    {
        $cookieIngredients = $this->getAllIngredients()->get();
        $isVeggie = true;
        if (count($cookieIngredients) > 0)
        {
            $i = 0;
            while ($i < count($cookieIngredients) && $isVeggie == true) {
                $ingredient = $cookieIngredients[$i];
                if (!$ingredient->is_veggie) {
                    $isVeggie = false;
                } else {
                    $i++;
                }
            }
        }
        else
        {
            $isVeggie = false;
        }
        return $isVeggie;
    }

    public function getIsVeganAttribute()
    {
        $cookieIngredients = $this->getAllIngredients()->get();
        $isVegan = true;
        if (count($cookieIngredients) > 0) {
            $i = 0;
            while ($i < count($cookieIngredients) && $isVegan == true) {
                $ingredient = $cookieIngredients[$i];
                if (!$ingredient->is_vegan) {
                    $isVegan = false;
                } else {
                    $i++;
                }
            }
        }
        else
        {
            $isVegan = false;
        }
        return $isVegan;
    }

    public function isDeleted()
    {
        return $this->is_deleted;
    }


}
