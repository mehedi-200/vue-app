import { createRouter, createWebHistory } from 'vue-router';
import {piniaStore} from "@/store";

import {defineAsyncComponent} from "vue";

const HomePage = defineAsyncComponent(()=>import("@/views/HomePage.vue"));
const AboutPage = defineAsyncComponent(()=>import('@/views/AboutPage.vue'));
const ThrottleDebounce = defineAsyncComponent(()=>import('@/views/DebounceThrottle.vue'));
const XssProtection = defineAsyncComponent(()=>import('@/views/XSS_Protection.vue'));
const routes =  [
    {
        path:'/home',
        component: HomePage,
        beforeEnter:(to,from,next)=>{
            if (piniaStore().isLoggedIn)
            {
                next();
            } else {
                alert('Sorry,you have to login first !');
                next('/about');
            }
        },
    },
    {
        path:'/about',
        component: AboutPage,
    },
    {
        path:'/throttle',
        component: ThrottleDebounce,
    },
    {
        path:'/xss',
        component:XssProtection
    }

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
