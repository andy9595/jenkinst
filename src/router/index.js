import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入加载条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false })
NProgress.configure({ minimum: 0.3 });

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/test2.vue')
  },
  {
    path: '/test',
    name: 'test2',
    component: () => import('../views/test2.vue')
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('../views/layout.vue'),
    children: [
      {
        path: '/welcome',
        name: 'welcome',
        component: () => import('../views/welcome.vue')
      },
      {
        path: '/welcome1',
        name: 'welcome1',
        components:{
          default:() => import('../views/welcome.vue'),
          test:() => import('../views/test1.vue')
        }
      }
    ]
  },
  {
    path: '/',
    redirect: '/login'
  }
]

const router = new VueRouter({
  mode:'hash',
  routes
})
//加载条注册在路由前置守卫
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  setTimeout(() => {
    NProgress.done()
  }, 200)
})

export default router
