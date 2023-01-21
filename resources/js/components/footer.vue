<template>
    <div class="footer-container"> 
        <div class="social-wrapper">
            <li class="social-item">
                <fa :icon="['fab', 'instagram']" class="social-icon"/>
            </li>
            <li class="social-item">
                <fa :icon="['fab', 'facebook']" class="social-icon"/>
            </li>
            <li class="social-item">
                <fa :icon="['fab', 'twitter']" class="social-icon"/>
            </li>
            <li class="social-item">
                <fa :icon="['fab', 'git']" class="social-icon"/>
            </li>
            <li class="social-item">
                <fa :icon="['fab', 'github']" class="social-icon"/>
            </li>
            <li class="social-item">
                <fa :icon="['fab', 'linkedin']" class="social-icon"/>
            </li>
        </div>
        <span class="font-semibold tracking-wide text-slate-600">Thank you for visiting my page!</span>
        <span class="font-semibold tracking-wide text-slate-600">© 2022 <span class="text-red-500">D</span>o<span class="text-red-500">D</span>ong</span>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>