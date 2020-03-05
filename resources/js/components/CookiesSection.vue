<template>
    <div>
        <vue-tailwind-modal :showing="visible" @close="visible = false">
            <!-- Put your modal content here -->
            <h1>Hello!!!</h1>

        </vue-tailwind-modal>
        <div class="w-full">
            <form class="bg-white rounded mt-4 mb-4" method="GET" role="search">
                <input type="hidden" name="_token" :value="csrf">
                <div class="row-auto mb-4 flex">
                    <input class="shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight"  v-on:keydown.enter.prevent="getCookies"
                           v-model="form.search" id="search" type="text" name="search" v-bind:placeholder="$t('cookies_form.search_cookies')">
                    <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline" type="button" v-on:click="getCookies">
                        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                  d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"/>
                        </svg>
                    </button>
                </div>
            </form>
        </div>
        <div class="">
            <table class="w-full table-auto mb-4 mt-4">
                <thead>
                <tr>
                    <th class="px-4 py-2 bg-red text-white">{{ $t('cookies_table.name') }}</th>
                    <th class="px-4 py-2 bg-red text-white">{{ $t('cookies_table.weight') }}</th>
                    <th class="px-4 py-2 bg-red text-white">{{ $t('cookies_table.calories') }}</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="cookie in cookies.data" v-on:click="show" class="alternate-color hover:bg-gray">
                    <td class="px-4 py-2">{{ cookie.name }}</td>
                    <td class="text-center px-4 py-2">{{ cookie.weight }}</td>
                    <td class="text-center px-4 py-2">{{ cookie.calories }}</td>
                </tr>
                </tbody>
            </table>
            <!--            {{ pagination }}-->
            <pagination :data="cookies" @pagination-change-page="getCookies" :limit="limit"></pagination>
        </div>
    </div>
</template>


<script>
    import VueTailwindModal from 'vue-tailwind-modal'

    export default {
        components: {
            VueTailwindModal,
        },
        data: function () {
            return {
                visible: false,
                cookies: {},
                limit: 4,
                csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                form: {
                    search:""
                }
            };
        },
        created() {
            this.getCookies();
        },
        methods: {
            show: function () {
                this.visible = true;
            },
            getCookies(page) {
                if (typeof page === 'undefined') {
                    page = 1;
                }
                let headers = {
                    'Accept': 'application/json;charset=utf-8',
                    'X-CSRF-TOKEN': this.csrf,
                };

                this.$http.get('/cookies?search=' + this.form.search + '&page=' + page, {headers})
                    .then(response => {
                        return response.json();
                    }).then(data => {
                    this.cookies = data;
                });
            },
            searchCookies(search, page) {
                if (typeof page === 'undefined') {
                    page = 1;
                }

                this.$http.get('/searchCookies?search=' + search + '&page=' + page)
                    .then(response => {
                        return response.json();
                    }).then(data => {
                    this.cookies = data;
                });
            }
        }
    }

</script>
