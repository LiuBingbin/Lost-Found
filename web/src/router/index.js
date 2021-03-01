import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Index from '../views/Index.vue'
import Found from '../views/Found.vue'
import Lost from '../views/Lost.vue'
import Personal from '../views/Personal.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Main',
    component: Main,
    redirect: '/index',
    children: [
      { path: '/index', component: Index },
      { path: '/found', component: Found },
      { path: '/lost', component: Lost },
      { path: '/personal', component: Personal },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router