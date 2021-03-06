<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Cookies Shop</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet">

    <!-- CSS -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet" type="text/css">
    <link href="{{ asset('css/custom.css') }}" rel="stylesheet" type="text/css">

    <div id="header">
        <navbar
            cookies="{{ __('navbar.cookies') }}"
            ingredients="{{ __('navbar.ingredients') }}">
        </navbar>
    </div>
</head>

<body class="overflow-x-hidden">
    <div id="app">
        @yield('content')
    </div>
</body>
<footer class="w-full text-center border-t border-grey bg-orange p-4 pin-b bottom-0 fixed z-10">
    <p class="text-xs text-white">
        ©2020 Biagio Pietro Capece.
    </p>
</footer>
<!-- Scripts -->
<script src="{{ asset('js/app.js') }}" type="text/javascript"></script>
</html>
