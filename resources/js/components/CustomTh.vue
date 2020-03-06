<template>
    <th class="px-4 py-2 bg-red text-white" v-on:click="sort(ordering_name)">
        <div class="flex justify-center">
            {{ content }}
            <order-icon :ordering="ordering"></order-icon>
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
            ordering_name: {
                type: String,
                required: true
            },
            ordering: {
                type: String,
                required: true
            },
        },
        methods: {
            sort: function (s) {
                this.$parent.sort(s)
            }
        }
    }
</script>
