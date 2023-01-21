<template>
    <headerComponent/>
    <div class="home-container">
        <div class="left-content-wrapper">
            <div class="flex flex-col justify-end lg:w-[80%] gap-y-4">
                <div class="flex flex-row items-center justify-between ">
                    <span class="h-2 w-[40%] border-b-[2px] border-slate-500"></span>
                    <span class="font-bold tracking-[6px] text-sm text-slate-700">HELLO</span>
                    <span class="h-2 w-[40%] border-b-[2px] border-slate-500"></span>
                </div>
                <h1 class="font-bold text-5xl text-slate-700 font-serif">I'm <span class="text-red-600">Johnny</span> Asumbra</h1>
                <p class="text-base text-slate-700">I'm an aspiring web developer. You can check some of my works on the Projects page or you can just contact me for any inquiries. Anyway just take you time to look around.</p>
                <button type="button" class="h-10 w-[150px] font-semibold text-[.9rem] rounded-sm text-slate-50 tracking-widest bg-red-600 mt-6 hover:bg-red-700">Download CV</button>
            </div>
        </div>
        <div class="right-content-wrapper">
            <div class="profile_image a"></div>
            <div class="profile_image b"></div>
            <div class="profile_image c"></div>
        </div>
    </div>
    <footerComponent/>
</template>

<script>
    import headerComponent from './header-nav.vue'
    import footerComponent from './footer.vue'
    export default {
        name: 'index',
        data () {
            return{
                status:{
                    stats: false
                }
            }
        },
        created () {
            document.title = "Portfolio - Home"

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