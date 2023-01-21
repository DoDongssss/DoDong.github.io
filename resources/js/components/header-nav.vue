<template>
    <div class="header-container">
        <h1 class="font-bold text-[1.65rem] tracking-wide text-slate-700 cursor-pointer">
            <router-link to="/"><span class="text-red-500">D</span>o<span class="text-red-500">D</span>ong</router-link>
        </h1>
        <nav class="nav-wrapper">
            <li class="nav-item"><router-link to="/">HOME</router-link></li>
            <li class="nav-item"><router-link to="/about">ABOUT</router-link></li>
            <li class="nav-item"><router-link to="/projects">PROJECTS</router-link></li>
            <li class="nav-item"><router-link to="/contact">CONTACT</router-link></li>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'header-nav',
        data () {
            return {

            }
        }
    }
</script>

<style>

</style>