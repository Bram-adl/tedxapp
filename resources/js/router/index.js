// @ts-nocheck
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: require('../pages/Home.vue').default
  },
  {
    path: '/products/detail',
    name: 'product.details',
    component: require('../pages/Products.vue').default
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: require('../pages/Dashboard.vue').default
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router