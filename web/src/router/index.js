import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Index from '../views/Index.vue'
import Found from '../views/Found.vue'
import Lost from '../views/Lost.vue'
import Personal from '../views/Personal.vue'
import Publish from '../views/Publish.vue'
import Login from '../views/Login.vue'
import Detail from '../views/Detail.vue'
import Search from '../views/Search.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/login',
    name: 'Login',
    component: Login
  },
  {
    path:'/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/',
    name: 'Main',
    component: Main,
    redirect: '/index',
    children: [
      { path: 'index', component: Index },
      { path: 'found', component: Found },
      { path: 'lost', component: Lost },
      { path: 'personal', component: Personal },
      { path: 'publish', component: Publish },
      { path: 'personal/edit/:id', component: Publish, props:true},
      { path: 'details/:id', component: Detail, props:true},
      { path: 'search/:keyword', component: Search, props:true},
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
