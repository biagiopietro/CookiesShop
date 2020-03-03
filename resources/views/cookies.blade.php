@extends('welcome')

@section('content')
    <div class="flex mb-4">
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2"></div>
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">@include('cookies_table')</div>
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 bg-"></div>
    </div>
@endsection

