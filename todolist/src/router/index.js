import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './../components/HelloWorld'
import Startup from './../components/Startup'
import FormControl from './../components/FormControl'
import MenuSimple from './../components/MenuSimple'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'


Vue.use(VueMaterial)
Vue.use(Router)
//storing router for multi usage
const router = new Router({
  mode: 'history',
  routes: [
    {path: '/', name: 'MenuSimple', component: MenuSimple}
    ,{path: '/startup', name: 'Startup', component: Startup}      
   ,{path: '/hello', name: 'HelloWorld', component: HelloWorld}
   ,{path: '/form', name: 'FormControl', component: FormControl}
  ]
})

router.beforeEach((to, from, next) => {
  //check to see if route requires auth
  if(to.matched.some(rec => rec.meta.requiresAuth)){
    //check auth state of user
    // let user = firebase.auth().currentUser
    let user = 'phi'
    if(user){
      //user signed in proceed to route
      next()
    } else {
      // no user signed in, redirect to login
      next({ name: 'Login'})
    }
  } else {
    next()
  }
})

export default router;