<table class="table-auto border">
    <thead>
    <tr>
        <th class="px-4 py-2">{{ __('cookies_table.name') }}</th>
        <th class="px-4 py-2">{{ __('cookies_table.weight') }}</th>
        <th class="px-4 py-2">{{ __('cookies_table.calories') }}</th>
    </tr>
    </thead>
    <tbody>
        @foreach ($cookies as $cookie)
            @include('row_cookies_table')
        @endforeach
    </tbody>
</table>
