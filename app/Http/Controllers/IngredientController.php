<?php

namespace App\Http\Controllers;

use App\Ingredient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class IngredientController extends Controller
{
    //
    const RESULT_PER_PAGE = 10;

    public function index(Request $request)
    {
        // If the request has header `Accept: */json`, return JSON
        if ($request->wantsJson()) {
            return $this->search($request);
        }
        return view('ingredients', ['ingredients' => $this->paginateIngredient($this->orderIngredientsByNameASC(Ingredient::getNotDeletedIngredients()))]);
    }

    private function search(Request $request)
    {
        if ($request->filled('search')) {
            $search = $request->search;
            $filteredIngredients = Ingredient::where('name', 'LIKE', '%' . $search . '%');
        } else {
            $filteredIngredients = Ingredient::getNotDeletedIngredients();

        }
        return $this->paginateIngredient($this->orderIngredientsByNameASC($filteredIngredients));
    }

    private function paginateIngredient($ingredients)
    {
        return response()->json($ingredients->paginate(self::RESULT_PER_PAGE));
    }

    private function orderIngredientsByNameASC($cookies)
    {
        return $cookies->orderBy('name','ASC');
    }
}
