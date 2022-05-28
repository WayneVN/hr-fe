import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import App from './App'
import HomePage from '@/pages/home/index'

const pinia = createPinia()

const routes: Array<RouteRecordRaw> = [
  {
    name: 'home',
    path: '/',
    component: HomePage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
