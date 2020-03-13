<?php

namespace App\Http\Controllers;

use App\Cookie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class CookieController extends Controller
{
    //
    const RESULT_PER_PAGE = 10;

    public function index(Request $request)
    {
        // If the request has header `Accept: */json`, return JSON
        if ($request->wantsJson()) {
            return $this->search($request);
        }
        return view('cookies', ['cookies' => $this->paginateCookies($this->orderCookiesByNameASC(Cookie::getNotDeletedCookies()))]);
    }

    public function ingredients($id)
    {
        $cookieIngredients = $this->orderIngredientsByNameASC(Cookie::find($id)->getNotDeletedIngredients())->get();
        return response()->json($cookieIngredients);
    }

    private function search(Request $request)
    {
        if ($request->filled('search')) {
            $search = $request->search;
            $filteredCookies = Cookie::where('name', 'LIKE', '%' . $search . '%');
        } else {
            $filteredCookies = Cookie::getNotDeletedCookies();

        }
        return $this->paginateCookies($this->orderCookiesByNameASC($filteredCookies));
    }

    private function paginateCookies($cookies)
    {
        return response()->json($cookies->paginate(self::RESULT_PER_PAGE));
    }

    private function orderCookiesByNameASC($cookies)
    {
        return $cookies->orderBy('name','ASC');
    }

    private function orderIngredientsByNameASC($ingredients)
    {
        return $ingredients->orderBy('name','ASC');
    }

}
