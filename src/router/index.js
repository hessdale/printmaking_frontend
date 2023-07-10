import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminView from '../views/AdminView.vue'
import ARView from '../views/ARView.vue'
import BlocksView from '../views/BlocksView.vue'
import AboutView from '../views/AboutView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  },
  {
    path: '/ar',
    name: 'ar',
    component: ARView
  },
  {
    path: '/blocks',
    name: 'blocks',
    component: BlocksView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
]

const router = new VueRouter({
  routes
})

export default router
