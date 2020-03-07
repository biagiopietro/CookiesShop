<template>
    <div>
        <div v-if="getColumnCurrentSortDir() !== 'asc' && getColumnCurrentSort() === this.currentSort">
            <svg style="width:16px;height:16px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 5H22V7H12M12 19V17H22V19M12 11H22V13H12M9 13V15L5.67 19H9V21H3V19L6.33 15H3V13M7 3H5C3.9 3 3 3.9 3 5V11H5V9H7V11H9V5C9 3.9 8.11 3 7 3M7 7H5V5H7Z" />
            </svg>
        </div>
        <div v-else>
            <svg style="width:16px;height:16px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M7 13H5C3.9 13 3 13.9 3 15V21H5V19H7V21H9V15C9 13.9 8.11 13 7 13M7 17H5V15H7M9 3V5L5.67 9H9V11H3V9L6.33 5H3V3M12 5H22V7H12M12 19V17H22V19M12 11H22V13H12Z" />
            </svg>
        </div>
    </div>
</template>


<script>
    export default {
        props: {
            currentSort: {
                type: String,
                required: true
            },
        },
        methods: {
            getColumnCurrentSort: function() {
                return this.$parent.getColumnCurrentSort();
            },
            getColumnCurrentSortDir: function() {
                return this.$parent.getColumnCurrentSortDir();
            }
        }
    }
</script>


