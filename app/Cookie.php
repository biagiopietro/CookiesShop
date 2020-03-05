<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cookie extends Model
{
    //
    protected $table = 'cookies';
    protected $primaryKey = 'id';

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

    public function isVeggie()
    {
        $cookieIngredients = $this->getAllIngredients()->get();
        $isVeggie = true;
        $i = 0;
        while ($i < count($cookieIngredients) && $isVeggie == true)
        {
            $ingredient = $cookieIngredients[$i];
            if (!$ingredient->is_veggie)
            {
                $isVeggie = false;
            }
            else
            {
                $i++;
            }
        }
        return $isVeggie;
    }

    public function isVegan()
    {
        $cookieIngredients = $this->getAllIngredients()->get();
        $isVegan = true;
        $i = 0;
        while ($i < count($cookieIngredients) && $isVegan == true)
        {
            $ingredient = $cookieIngredients[$i];
            if (!$ingredient->is_vegan)
            {
                $isVegan = false;
            }
            else
            {
                $i++;
            }
        }
        return $isVegan;
    }

    public function isDeleted()
    {
        return $this->is_deleted;
    }


}
