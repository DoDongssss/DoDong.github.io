// import './bootstrap';

import { createApp } from 'vue/dist/vue.esm-bundler';
import * as VueRouter from 'vue-router'

// font awesome libaray
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// nav links
import home from "./components/home.vue"
import about from "./components/about.vue"
import projects from "./components/projects.vue"
import contact from "./components/contact.vue"

const app = createApp({})

library.add(fas, fab)
app.component('fa', FontAwesomeIcon)

const routes = [
    {path: '/', component: home},
    {path: '/about', component: about},
    {path: '/projects', component: projects},
    {path: '/contact', component: contact},
]
const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory('/'),
    routes, 
})

app.use(router)
app.component('home', home)
app.mount("#app");


