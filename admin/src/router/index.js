import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Lost from '../views/Lost.vue'
import Found from '../views/Found.vue'
import Upload from '../views/Upload.vue'
import Check from '../views/Check.vue'
import AdminUserEdit from '../views/AdminUserEdit.vue'
import AdminUserList from '../views/AdminUserList.vue'
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
    redirect: 'goods/lost',
    children: [
      {
        path: 'goods/lost',
        component: Lost
      },
      {
        path: 'goods/found',
        component: Found
      },
      {
        path: 'goods/upload',
        component: Upload
      },
      {
        path: 'goods/edit/:id',
        component: Upload,
        props: true
      },
      {
        path: 'check',
        component: Check
      },
      {
        path: 'admin_users/edit',
        component: AdminUserEdit
      },
      {
        path: 'admin_users/edit/:id',
        component: AdminUserEdit,
        props: true
      },
      {
        path: 'admin_users/list',
        component: AdminUserList
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
