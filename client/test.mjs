import { createApp } from '@vue/runtime-dom'
import { createRouter, createWebHistory } from 'vue-router'

import '@/common.scss'

import routes from '@/views/routes.mjs'

const router = createRouter({
    history:  createWebHistory(),
    routes
})

import Layout from '@/views/Layout.vue'

createApp(Layout)
    .use(router)
    .mount('main')
