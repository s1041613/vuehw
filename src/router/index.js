import Vue from 'vue'
import Router from 'vue-router'
//page
import firstpage from '@/components/firstpage'
import secondpage from '@/components/secondpage'
//import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
export default new Router({
  routes: [
  
    {
      path: '/firstpage',
      name: 'firstpage',
      component: firstpage
    },
 		{
      path: '/secondpage',
      name: 'secondpage',
      component: secondpage
    }
  ]
})
