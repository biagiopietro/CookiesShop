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
        return $this->getAllIngredients()->where('is_deleted',true);
    }

    public function getNotDeletedIngredients()
    {
        return $this->getAllIngredients()->where('is_deleted',false);
    }

    public function isDeleted()
    {
        return $this->is_deleted;
    }


}
