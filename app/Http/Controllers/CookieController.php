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
        $cookieIngredients = Cookie::find($id)->getNotDeletedIngredients()->get();
        return response()->json($cookieIngredients);
    }

    private function search(Request $request)
    {
        if ($request->filled('search')) {
            $search = $request->search;
            $filteredCookies = Cookie::where('name', 'LIKE', '%' . $search . '%');
        } else {
            $filteredCookies = Cookie::query();

        }
        return $this->paginateCookies($filteredCookies);
    }

    private function paginateCookies($cookies)
    {
        return response()->json($cookies->paginate(10));
    }
}
