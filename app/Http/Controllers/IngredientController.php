<?php

namespace App\Http\Controllers;

use App\Ingredient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class IngredientController extends Controller
{
    //

    public function index(Request $request)
    {
        // If the request has header `Accept: */json`, return JSON
        if ($request->wantsJson()) {
            return $this->search($request);
        }
        return view('ingredients', ['ingredients' => $this->paginateIngredient($this->orderIngredientsByNameASC(Ingredient::query()))]);
    }

    private function search(Request $request)
    {
        if ($request->filled('search')) {
            $search = $request->search;
            $filteredIngredients = Ingredient::where('name', 'LIKE', '%' . $search . '%');
        } else {
            $filteredIngredients = Ingredient::query();

        }
        return $this->paginateIngredient($this->orderIngredientsByNameASC($filteredIngredients));
    }

    private function paginateIngredient($ingredients)
    {
        return response()->json($ingredients->paginate(10));
    }

    private function orderIngredientsByNameASC($cookies)
    {
        return $cookies->orderBy('name','ASC');
    }
}
