<template>
    <div>
        <vue-tailwind-modal :showing="visible" @close="visible = false" :class="'z-20'">
            <div class="bg-white w-auto">
                <ul class="max-w-sm rounded overflow-hidden ">
                    <div class="px-6 pt-4">
                        <div id="modal-title" class="font-bold text-xl mb-2 text-orange"></div>
                        <div class="font-bold text-md mb-2">{{ $t('navbar.ingredients') }}</div>
                    </div>
                    <div v-if="ingredients.length !== 0">
                        <ul class="px-6 py-4 sm:list-none md:list-none lg:list-none xl:list-none">
                            <li>
                                <span v-for="ingredient in ingredients"
                                      class="m-1 inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700">{{ ingredient.name }}</span>
                            </li>
                        </ul>
                    </div>
                    <div v-else class="pb-4">
                        <span class="opacity-25">{{ $t('cookies_table.no_ingredients_available') }}</span>
                    </div>
                </ul>
            </div>
            <div class="flex justify-center">
                <button id="modal-got-it" type="button" v-on:click="visible = false" class="py-2 px-3 rounded bg-orange text-white">
                    {{ $t('cookies_table.got_it') }}
                </button>
            </div>


        </vue-tailwind-modal>
        <div class="w-full">
            <search-bar
                :csrf="csrf"
                :placeholder="$t('cookies_form.search_cookies')"
                v-on:searchFunction="getCookies"
                @update="setSearchValue">
            </search-bar>
        </div>
        <div class="">
            <table class="w-full table-auto mb-4 mt-4">
                <thead>
                <tr>
                    <custom-th
                        :id="'th-name'"
                        :content="$t('cookies_table.name')"
                        :currentSort="'name'"
                        :isColumnNumbered="false">
                    </custom-th>
                    <custom-th
                        :id="'th-weight'"
                        :content="$t('cookies_table.weight')"
                        :currentSort="'weight'"
                        :isColumnNumbered="true">
                    </custom-th>
                    <custom-th
                        :id="'th-calories'"
                        :content="$t('cookies_table.calories')"
                        :currentSort="'calories'"
                        :isColumnNumbered="true">
                    </custom-th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="cookie in sortedCookies" v-on:click="showIngredients(cookie.id)" :id="'cookie-row-' +cookie.id"
                        class="alternate-color hover:bg-gray z-10">
                        <td class="cookie-name px-4 py-2">
                            <span :id="'cookie-name-' + cookie.id">{{ cookie.name }}</span>
                            <vegan-veggie-badge :cookie_id="cookie.id"
                                                :is_veggie="cookie.is_veggie"
                                                :is_vegan="cookie.is_vegan">
                            </vegan-veggie-badge>
                        </td>
                        <td class="cookie-weight text-center px-4 py-2">{{ cookie.weight }}</td>
                        <td class="cookie-calories text-center px-4 py-2">{{ cookie.calories }}</td>
                    </tr>
                </tbody>
            </table>
            <pagination :id="'pagination'" :data="pagination" @pagination-change-page="getCookies" :limit="limit"></pagination>
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
                cookies: [],
                pagination: {},
                ingredients: {},
                limit: 4,
                search: "",
                csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                currentSort: '',
                currentSortDir: 'asc'
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

                this.$http.get('/cookies/' + id + '/ingredients', {headers})
                    .then(response => {
                        return response.json();
                    }).then(data => {
                    document.getElementsByClassName('relative')[0].classList.remove("w-full");
                    document.getElementsByClassName('relative')[0].classList.add("w-auto");
                    const cookieName = document.getElementById("cookie-name-" + id).innerText;
                    document.getElementById("modal-title").innerText = cookieName;
                    this.ingredients = data;
                });
            },
            setSearchValue: function(search) {
                this.search = search;
            },
            getCookies(page) {
                if (typeof page === 'undefined') {
                    page = 1;
                }
                let headers = {
                    'Accept': 'application/json;charset=utf-8',
                    'X-CSRF-TOKEN': this.csrf,
                };

                this.$http.get('/cookies?search=' + this.search + '&page=' + page, {headers})
                    .then(response => {
                        return response.json();
                    }).then(data => {
                    this.cookies = data.data;
                    this.pagination = data;
                });
            },
            sort: function (s) {
                //if s == current sort, reverse
                if (s === this.currentSort || this.currentSort === "") {
                    this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc';
                }
                this.currentSort = s;
            },
            getCurrentSortDir: function() {
                return this.currentSortDir;
            }
        },
        computed: {
            sortedCookies: function () {
                return this.cookies.sort((a, b) => {
                    let modifier = 1;
                    if (this.currentSortDir === 'desc') modifier = -1;
                    if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
                    if (a[this.currentSort] > b[this.currentSort]) return modifier;
                    return 0;
                });
            }
        }

    }

</script>
