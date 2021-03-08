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

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
      const tokenStr = localStorage.getItem('token')
      if (!tokenStr) {
        next('/login')
        alert('您还未登录，点击确认返回登录页面')
      } else {
        next()
      }
    }
})

export default router
