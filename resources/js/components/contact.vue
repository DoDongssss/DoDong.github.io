<template>
    <headerComponent/>
    <div class="home-container">
        
    </div>
    <footerComponent/>
</template>

<script>
    import headerComponent from './header-nav.vue'
    import footerComponent from './footer.vue'
    export default {
        name: 'about',
        data () {
            return{
                status:{
                    stats: false
                }
            }
        },
        created () {
            document.title = "Portfolio - Contact"

        },
        methods: {

        },
        components: {
            headerComponent,
            footerComponent
        }
    }
</script>

<style lang="scss" scoped>

</style>