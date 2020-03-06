<template>
    <div>
        <form class="bg-white rounded mt-4 mb-4" method="GET" role="search">
            <input type="hidden" name="_token" :value="csrf">
            <div class="row-auto mb-4 flex">
                <input class="shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight"
                       v-on:keydown.enter.prevent="searchFunction()"
                       v-model="search" id="search" type="text" name="search"
                       v-bind:placeholder="placeholder">
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline"
                    type="button" v-on:click="searchFunction()">
                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                        <path fill="currentColor"
                              d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"/>
                    </svg>
                </button>
            </div>
        </form>
    </div>
</template>


<script>
    export default {
        props: {
            csrf: {
                type: String,
                required: true
            },
            placeholder: {
                type: String,
                required: true
            },
        },
        data: function () {
            return {
                search: ""
            };
        },
        methods: {
            searchFunction: function() {
                this.$emit('searchFunction');
                this.$emit('update', this.search);
            },
        },
        mounted() {
                this.$emit('update', this.search);
        },
    }
</script>
