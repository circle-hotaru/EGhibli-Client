import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home/Home'
import Films from '@/pages/Films/Films'
import Roles from '@/pages/Roles/Roles'
import Search from '@/pages/Search/Search'
import Link from '@/pages/Link/Link'
import About from '@/pages/About/About'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/films',
    name: 'films',
    component: Films
  },
  {
    path: '/roles',
    name: 'roles',
    component: Roles
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/link',
    name: 'link',
    component: Link
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
