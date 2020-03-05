<?php

namespace App\Http\Controllers;

use App\Cookie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class CookieController extends Controller
{
    //
    public function index(Request $request)
    {
        // If the request has header `Accept: */json`, return JSON
        if ($request->wantsJson()) {
            return $this->search($request);
        }
        return view('cookies', ['cookies' => $this->paginateCookies(Cookie::query())]);
    }

    public function ingredients(Request $request, $id)
    {
        $cookie_ingredients = Cookie::find($id)->getNotDeletedIngredients()->get();
        return response()->json($cookie_ingredients);
    }

    private function search(Request $request)
    {
        if ($request->filled('search')) {
            $search = $request->search;
            $filtered_cookies = Cookie::where('name', 'LIKE', '%' . $search . '%');
        } else {
            $filtered_cookies = Cookie::query();

        }
        return $this->paginateCookies($filtered_cookies);
    }

    private function paginateCookies($cookies)
    {
        return response()->json($cookies->paginate(10));
    }
}
