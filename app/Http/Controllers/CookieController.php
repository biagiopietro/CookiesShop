<?php

namespace App\Http\Controllers;

use App\Cookie;
use Illuminate\Http\Request;

class CookieController extends Controller
{
    //
    public function index()
    {
        return view('cookies', ['cookies' => $this->paginateCookies(Cookie::query())]);
    }

    public function search(Request $request)
    {
        if ($request->filled('search'))
        {
            $search = $request->search;
            $filtered_cookies = Cookie::where('name','LIKE','%'.$search.'%');
        }
        else
        {
            $filtered_cookies = Cookie::query();

        }
        //if (count($filtered_cookies) <= 0)
        {
//            $view = $view->withMessage("No cookies found");
        }
        return $view = view('cookies', ['cookies' => $this->paginateCookies($filtered_cookies)]);
    }

    public function paginateCookies($cookies)
    {
        return $cookies->paginate(10)->onEachSide(2);
    }
}
