
<template>
    <vue-flux
        :options="vfOptions"
        :images="vfImages"
        :transitions="vfTransitions"
        :captions="vfCaptions"
        ref="slider">
    </vue-flux>
</template>

<script>
    import { VueFlux} from 'vue-flux';

    export default {
        components: {
            VueFlux
        },

        data: () => ({
            vfOptions: {
                autoplay: true
            },
            vfImages: [
                'https://images.unsplash.com/photo-1548848221-0c2e497ed557?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                'https://images.unsplash.com/photo-1571165841024-2ce92069301d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1559622214-f8a9850965bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80',
                'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
                'https://images.unsplash.com/photo-1481390915718-84930b788814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80'
            ],
            vfTransitions: [ 'swipe' ],
            vfCaptions: [ 'URL1', 'URL2', 'URL3' ],
        }),

    }

</script>
