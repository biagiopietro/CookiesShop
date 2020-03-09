<template>
    <span>
        <button :id="'cookie-veggie-' + cookie_id" v-if="is_veggie" class="tooltip text-white rounded-6 bg-green-900 w-6 h-6 z-10">
            v
            <span class="tooltiptext">{{ $t('ingredients_table.is_veggie')}}</span>
        </button>
        <button :id="'cookie-vegan-' + cookie_id" v-if="is_veggie && is_vegan" class="tooltip text-white rounded-6 bg-cyan w-6 h-6 ml--2 z-0">
            v
            <span class="tooltiptext">{{ $t('ingredients_table.is_vegan')}}</span>
        </button>
        <button :id="'cookie-vegan-' + cookie_id" v-else-if="is_vegan" class="tooltip text-white rounded-6 bg-cyan w-6 h-6 z-0">
            v
            <span class="tooltiptext">{{ $t('ingredients_table.is_vegan')}}</span>
        </button>
    </span>
</template>


<script>
    export default {
        props: {
            is_vegan: {
                type: Boolean,
                required: true
            },
            is_veggie: {
                type: Boolean,
                required: true
            },
            cookie_id: {
                type: String,
                required: true
            }
        },
    }
</script>
