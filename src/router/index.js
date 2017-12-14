import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Cart from '@/components/Cart'
import Category from '@/components/Category'
import Mine from '@/components/Mine'
import Detail from '@/components/Detail'
import Citybox from '@/components/Citybox'


Vue.use(Router)

export default new Router({

  routes: [
     {
	  	path:'/',
	  	redirect:'/home'
	 },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
     {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path:'/mine',
      name:'mine',
      component:Mine
    },
    {
      path:'/detail',
      name:'/detail',
      component:Detail
    },{
      path:'/citybox',
      name:'/citybox',
      component:Citybox
    }
  ]
})
