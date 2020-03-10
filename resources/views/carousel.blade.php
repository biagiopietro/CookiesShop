@extends('welcome')

@section('content')
    <div class="flex ">
            <carousel
                class="w-full"
                :gallery_id="0"
                style="height: 20rem;">
            </carousel>
    </div>
    <div class="flex ">
            <carousel
                class="w-full"
                :gallery_id="1"
                style="height: 20rem;">
            </carousel>
    </div>
    <div class="flex ">
            <carousel
                class="w-full"
                :gallery_id="2"
                style="height: 20rem;">
            </carousel>
    </div>
@endsection

