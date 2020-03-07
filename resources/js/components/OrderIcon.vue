<template>
    <div>
        <div v-if="getColumnCurrentSortDir() !== 'asc' && getColumnCurrentSort() === this.currentSort">
            <div v-if="!isColumnNumbered">
                <svg style="width:16px;height:16px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 5H22V7H12M12 19V17H22V19M12 11H22V13H12M9 13V15L5.67 19H9V21H3V19L6.33 15H3V13M7 3H5C3.9 3 3 3.9 3 5V11H5V9H7V11H9V5C9 3.9 8.11 3 7 3M7 7H5V5H7Z" />
                </svg>
            </div>
            <div v-else>
                <svg style="width:24px;height:16px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M7 21H3V19H7V18H5C3.9 18 3 17.11 3 16V15C3 13.9 3.9 13 5 13H7C8.11 13 9 13.9 9 15V19C9 20.11 8.11 21 7 21M7 15H5V16H7M5 3H7C8.11 3 9 3.9 9 5V9C9 10.11 8.11 11 7 11H5C3.9 11 3 10.11 3 9V5C3 3.9 3.9 3 5 3M5 9H7V5H5M12 5H22V7H12M12 19V17H22V19M12 11H22V13H12Z" />
                </svg>
            </div>
        </div>
        <div v-else>
            <div v-if="!isColumnNumbered">
                <svg style="width:16px;height:16px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M7 13H5C3.9 13 3 13.9 3 15V21H5V19H7V21H9V15C9 13.9 8.11 13 7 13M7 17H5V15H7M9 3V5L5.67 9H9V11H3V9L6.33 5H3V3M12 5H22V7H12M12 19V17H22V19M12 11H22V13H12Z" />
                </svg>
            </div>
            <div v-else>
                <svg style="width:24px;height:16px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M7 11H3V9H7V8H5C3.9 8 3 7.11 3 6V5C3 3.9 3.9 3 5 3H7C8.11 3 9 3.9 9 5V9C9 10.11 8.11 11 7 11M7 5H5V6H7M5 13H7C8.11 13 9 13.9 9 15V19C9 20.11 8.11 21 7 21H5C3.9 21 3 20.11 3 19V15C3 13.9 3.9 13 5 13M5 19H7V15H5M12 5H22V7H12M12 19V17H22V19M12 11H22V13H12Z" />
                </svg>
            </div>

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
            isColumnNumbered: {
                type: Boolean,
                required: true
            }
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


