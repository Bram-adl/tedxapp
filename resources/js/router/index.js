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
    path: '/payments/:id/:username',
    name: 'product.payments',
    component: require('../pages/Payments.vue').default
  },

  {
    path: '/dashboard',
    component: require('../pages/Dashboard.vue').default,
    children: [
      {
        path: '',
        name: 'dashboard',
        component: require('../pages/DashboardIndex.vue').default
      },
      {
        path: 'merchandise',
        name: 'dashboard.merchandise',
        component: require('../pages/Merchandise.vue').default
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router