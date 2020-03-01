<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ingredient extends Model
{
    //
    protected $table = 'ingredients';
    protected $primaryKey = 'id';

    public function getAllCookies()
    {
        return $this->belongsToMany('App\Cookie','cookie_recipes');
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