@extends('welcome')

@section('content')
    <div class="flex mb-4">
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2"></div>
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
            <div class="w-full">
                <form class="bg-white rounded mt-4 mb-4" action="/cookies/search" method="GET" role="search">
                    @method('GET')
                    @csrf
                    <div class="row-auto mb-4 flex">
                        <input class="shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight " id="search" type="text" name="search" placeholder="{{ __('cookies_form.search_cookies') }}">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline" type="submit" >
                            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
            @include('cookies_table')
        </div>
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 bg-"></div>
    </div>
@endsection

