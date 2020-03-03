<div class="">
    <table class="w-full table-auto border mb-4 mt-4">
        <thead>
        <tr>
            <th class="px-4 py-2 bg-red text-white">{{ __('cookies_table.name') }}</th>
            <th class="px-4 py-2 bg-red text-white">{{ __('cookies_table.weight') }}</th>
            <th class="px-4 py-2 bg-red text-white">{{ __('cookies_table.calories') }}</th>
        </tr>
        </thead>
        <tbody>
        @foreach ($cookies as $cookie)
            @include('row_cookies_table')
        @endforeach
        </tbody>
    </table>
    {{ $cookies->links() }}
</div>
