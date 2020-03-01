<?php

namespace App\Http\Controllers;

use App\Cookie;
use Illuminate\Http\Request;

class CookieController extends Controller
{
    //
    public function index()
    {
        return view('welcome', ['cookies' => Cookie::all()]);
    }
}
