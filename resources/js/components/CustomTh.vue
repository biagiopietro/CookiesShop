<template>
    <th class="px-4 py-2 bg-red text-white" v-on:click="sort(currentSort)">
        <div class="flex justify-center">
            {{ content }}
            <order-icon :currentSort="currentSort"></order-icon>
        </div>
    </th>
</template>


<script>
    export default {
        props: {
            content: {
                type: String,
                required: true
            },
            currentSort: {
                type: String,
                required: true
            },
        },
        data: function () {
          return {
              columnCurrentSort: this.currentSort,
              columnCurrentSortDir: this.getCurrentSortDir()
          }
        },
        methods: {
            sort: function (s) {
                this.$parent.sort(s);
                this.columnCurrentSort = this.currentSort;
                this.columnCurrentSortDir =  this.getCurrentSortDir();
            },
            getColumnCurrentSort: function() {
                return this.columnCurrentSort;
            },
            getColumnCurrentSortDir: function() {
                return this.columnCurrentSortDir;
            },
            getCurrentSortDir: function() {
                return this.$parent.getCurrentSortDir();
            }
        }
    }
</script>
