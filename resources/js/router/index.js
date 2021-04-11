// @ts-nocheck
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const auth = {
  isLoggedIn () {
    return true
  }
}

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
    path: '/payments/:user',
    name: 'payments.user',
    component: require('../pages/Payments.vue').default
  },

  {
    path: '/dashboard',
    name: 'dashboard',
    component: require('../pages/Dashboard.vue').default,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth.isLoggedIn()) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router