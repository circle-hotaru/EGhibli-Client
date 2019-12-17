import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home/Home'
import Film from '@/pages/Film/Film'
import People from '@/pages/People/People'
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
    path: '/film',
    name: 'film',
    component: Film
  },
  {
    path: '/people',
    name: 'people',
    component: People
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
