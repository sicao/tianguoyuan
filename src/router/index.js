import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Category from '@/components/Category'
import Search from '@/components/Search'


import Cart from '@/components/Cart'

import Mine from '@/components/Mine'
import Personal from '@/components/Personal'

import Login from '@/components/Login'
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
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/mine',
      name:'mine',
      component:Mine
    },
    ,{
      path:'/personal',
      name:'personal',
      component:Personal
    },
    {
      path:'/detail',
      name:'detail',
      component:Detail
    },{
      path:'/citybox',
      name:'citybox',
      component:Citybox
    },
    {
      path:'/search',
      name:'search',
      component:Search
    }
  ]
})
