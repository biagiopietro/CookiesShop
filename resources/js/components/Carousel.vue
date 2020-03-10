
<template>
    <vue-flux
        :options="vfOptions"
        :images="vfImages"
        :transitions="vfTransitions"
        :captions="vfCaptions"
        ref="slider"
        style="min-height: 35rem">
    </vue-flux>
</template>

<script>
    import { VueFlux} from 'vue-flux';

    // https://github.com/deulos/vue-flux
    export default {
        components: {
            VueFlux
        },

        data: () => ({
            vfOptions: {
                autoplay: true
            },
            vfImages: [],
            vfTransitions: [],
            vfCaptions: [ 'URL1', 'URL2', 'URL3' ],
        }),
        props: {
            gallery_id: {
                type: Number,
                required: true
            }
        },
        created() {
            this.setGallery(this.gallery_id)
        },
        methods: {
            setGallery: function(number) {
                if (number === 0)
                {
                    this.vfTransitions = ['swipe'];
                    this.vfImages = [
                        'https://images.unsplash.com/photo-1548848221-0c2e497ed557?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                        'https://images.unsplash.com/photo-1571165841024-2ce92069301d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                        'https://images.unsplash.com/photo-1559622214-f8a9850965bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80',
                        'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
                        'https://images.unsplash.com/photo-1481390915718-84930b788814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80'
                    ]
                }
                if (number === 1)
                {
                    this.vfTransitions = ['kenburn'];
                    this.vfImages = [
                        'https://images.unsplash.com/photo-1532499016263-f2c3e89de9cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                        'https://images.unsplash.com/photo-1486893732792-ab0085cb2d43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                        'https://images.unsplash.com/photo-1574156812219-2ddcf745088e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                        'https://images.unsplash.com/photo-1447949122973-9711a09951d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                    ]
                }
                if (number === 2)
                {
                    this.vfTransitions = ['warp'];
                    this.vfImages = [
                        'https://images.unsplash.com/photo-1511910567178-88eb0fdca008?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                        'https://images.unsplash.com/photo-1559594323-61ceaab4e52e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                        'https://images.unsplash.com/photo-1575613074157-4de7ef1ba4a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                        'https://images.unsplash.com/photo-1560617902-f5cc2771e808?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                    ]
                }
            }
        }

    }

</script>
