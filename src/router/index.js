import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/property',
    name: 'Property',
    component: () => import(/* webpackChunkName: "property" */ '../views/Property.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "blog" */ '../views/Blog.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import(/* webpackChunkName: "contacts" */ '../views/Contacts.vue')
  }
  ,
  {
    path: '/signin',
    name: 'Sign In',
    component: () => import(/* webpackChunkName: "signin" */ '../views/Signin.vue')
  }
  ,
  {
    path: '/forum',
    name: 'Forum',
    component: () => import(/* webpackChunkName: "Forum" */ '../views/Forum.vue')
  }
  ,
  {
    path: '/promotions',
    name: 'Promotions',
    component: () => import(/* webpackChunkName: "Promotions" */ '../views/Promotions.vue')
  }
  ,
  {
    path: '/news',
    name: 'News',
    component: () => import(/* webpackChunkName: "News" */ '../views/News.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
