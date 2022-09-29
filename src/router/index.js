import {createRouter, createWebHistory} from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import WeatherView from '../views/WeatherView.vue'
  
 const routes = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/weather',
        component: WeatherView
    },
    {
        path: '/about',
        component: AboutView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes          
})

export default router;