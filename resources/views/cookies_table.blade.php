<table class="table-auto border">
    <thead>
    <tr>
        <th class="px-4 py-2">Name</th>
        <th class="px-4 py-2">Weight</th>
        <th class="px-4 py-2">Calories</th>
    </tr>
    </thead>
    <tbody>
    @foreach ($cookies as $cookie)
        @include('row_cookies_table')
    @endforeach

    </tbody>
</table>
