import main from './components/main.vue'
import home from './components/home.vue'
import VueRouter from 'vue-router'
import Vue from 'vue'
import {store} from './store/store'

Vue.use(VueRouter)

const routes=new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            component:main
        },
        {
            path:'/home',
            component:home,
            meta:{
                requiresAuth:true
            }
        }
    ]

  });

  routes.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (store.getters.isLoggedIn) {
        next()
        return
      }
      next('/')
    } else {
      next()
    }
  })


export default routes;
  