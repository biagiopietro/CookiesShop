<template>
    <div>
        <div class="w-full">
            <search-bar
                :csrf="csrf"
                :placeholder="$t('ingredients_form.search_ingredients')"
                v-on:searchFunction="getIngredients"
                @update="setSearchValue">
            </search-bar>
        </div>
        <div class="">
            <table class="w-full table-auto mb-4 mt-4">
                <thead>
                <tr>
                    <custom-th
                        :id="'th-name'"
                        :content="$t('ingredients_table.name')"
                        :currentSort="'name'"
                        :isColumnNumbered="false">
                    </custom-th>
                    <th class="px-4 py-2 bg-red text-white">{{ $t('ingredients_table.is_veggie') }}</th>
                    <th class="px-4 py-2 bg-red text-white">{{ $t('ingredients_table.is_vegan') }}</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="ingredient in sortedIngredients"
                    class="alternate-color hover:bg-gray z-10">
                    <td class="ingredient-name px-4 py-2">{{ ingredient.name }}</td>
                    <td class="ingredient-veggie text-center px-4 py-2">
                        <tick-cross :ingredientId="ingredient.id"
                                    :columnName="'veggie'"
                                    :show="ingredient.is_veggie"></tick-cross>
                    </td>
                    <td class="ingredient-vegan text-center px-4 py-2">
                        <tick-cross :ingredientId="ingredient.id"
                                    :columnName="'vegan'"
                                    :show="ingredient.is_vegan"></tick-cross>
                    </td>
                </tr>
                </tbody>
            </table>
            <pagination :id="'pagination'" class="pb-12"  :data="pagination" @pagination-change-page="getIngredients" :limit="limit"></pagination>
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
                pagination: {},
                ingredients: [],
                limit: 4,
                search: "",
                csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                currentSort: '',
                currentSortDir: 'asc'
            };
        },
        created() {
            this.getIngredients();
        },
        methods: {
            setSearchValue: function(search) {
                this.search = search;
            },
            getIngredients(page) {
                if (typeof page === 'undefined') {
                    page = 1;
                }
                let headers = {
                    'Accept': 'application/json;charset=utf-8',
                    'X-CSRF-TOKEN': this.csrf,
                };

                this.$http.get('/ingredients?search=' + this.search + '&page=' + page, {headers})
                    .then(response => {
                        return response.json();
                    }).then(data => {
                    this.ingredients = data.data;
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
            sortedIngredients: function () {
                return this.ingredients.sort((a, b) => {
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
