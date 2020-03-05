<template>
    <div>
        <vue-tailwind-modal :showing="visible" @close="visible = false" :class="'z-10'">
            <div class="bg-white w-auto">
                <ul class="max-w-sm rounded overflow-hidden ">
                    <div class="px-6 pt-4">
                        <div id="modal-title" class="font-bold text-xl mb-2 text-orange"></div>
                        <div class="font-bold text-md mb-2">{{ $t('navbar.ingredients') }}</div>
                    </div>
                    <div v-if="ingredients.length !== 0">
                        <ul class="px-6 py-4 sm:list-none md:list-none lg:list-none xl:list-none">
                            <li>
                                <span v-for="ingredient in ingredients" class="m-1 inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700">{{ ingredient.name }}</span>
                            </li>
                        </ul>
                    </div>
                    <div v-else class="pb-4">
                        <span class="opacity-25" >{{ $t('cookies_table.no_ingredients_available') }}</span>
                    </div>
                </ul>
            </div>
            <div class="flex justify-center">
                <button type="button" v-on:click="visible = false" class="py-2 px-3 rounded bg-orange text-white">
                    {{ $t('cookies_table.got_it') }}
                </button>
            </div>


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
                <tr v-for="cookie in cookies.data" v-on:click="showIngredients(cookie.id)" class="alternate-color hover:bg-gray z-10">
                    <td class="px-4 py-2">
                        <span :id="'cookie-name-' +cookie.id" >{{ cookie.name }}</span>
                        <button v-if="cookie.is_veggie" class="tooltip rounded-6 bg-green-900 w-6 h-6 z-0">
                            v
                            <span class="tooltiptext">{{ $t('ingredients_table.is_veggie')}}</span>
                        </button>
                        <button v-if="cookie.is_veggie && cookie.is_vegan" class="tooltip rounded-6 bg-cyan w-6 h-6 ml--2 z-0">
                            v
                            <span class="tooltiptext">{{ $t('ingredients_table.is_vegan')}}</span>
                        </button>
                        <button v-else-if="cookie.is_vegan" class="tooltip rounded-6 bg-cyan w-6 h-6 z-0">
                            v
                            <span class="tooltiptext">{{ $t('ingredients_table.is_vegan')}}</span>
                        </button>
                    </td>
                    <td class="text-center px-4 py-2">{{ cookie.weight }}</td>
                    <td class="text-center px-4 py-2">{{ cookie.calories }}</td>
                </tr>
                </tbody>
            </table>
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
                ingredients: {},
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
            showIngredients: function (id) {

                // Set the width of the dialog
                // Show the dialog
                this.visible = true;
                let headers = {
                    'Accept': 'application/json;charset=utf-8',
                    'X-CSRF-TOKEN': this.csrf,
                };


                this.$http.get('/cookies/'+id+'/ingredients', {headers})
                    .then(response => {
                        return response.json();
                    }).then(data => {
                    document.getElementsByClassName('relative')[0].classList.remove("w-full");
                    document.getElementsByClassName('relative')[0].classList.add("w-auto");
                    var cookieName = document.getElementById("cookie-name-"+id).innerText;
                    document.getElementById("modal-title").innerText = cookieName;
                    this.ingredients = data;
                });
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
