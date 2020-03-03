<?php

namespace App\Http\Controllers;

use App\Cookie;
use Illuminate\Http\Request;

class CookieController extends Controller
{
    //
    public function index()
    {
        return view('cookies', ['cookies' => Cookie::paginate(10)->onEachSide(2)]);
    }
}
