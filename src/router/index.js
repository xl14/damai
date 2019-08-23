import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from "@/components/Home"
import Login from "@/pages/Login"
import Admin from '@/pages/Admin'
import OrderMenu from '@/components/Order/OrderMenu'
import MyMsg from "@/components/Order/MyMsg"
import Purchasers from '@/components/Order/Purchasers'
import AddPurchaser from '@/components/Order/AddPurchaser'
import TablePurchaser from '@/components/Order/tablePurchaser'
import Index from "@/pages/Index"
import Qinzi from "@/pages/qinzi"
import xijv from "@/pages/xijv"
import InterfaceTest from "@/pages/InterfaceTest"
import Register from "@/pages/Register"
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/qinzi',
      name: 'Qinzi',
      component: Qinzi
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },{
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/admin',
      name: "Admin",
      component: Admin,
      children:[
      {
        path:"",
        name:"OrderMenu2",
        component:OrderMenu
      },{
        path: 'ordermenu',
        name: 'OrderMenu',
        component: OrderMenu
      },{
        path:"mymsg",
        name: 'MyMsg',
        component: MyMsg
      },{
        path: 'purchasers',
        name: 'Purchasers',
        component: Purchasers,
        children:[
          {
            path:"",
            name:"TablePurchaser",
            component:TablePurchaser
          },
          {
          path:"addpurchaser",
          name:"AddPurchaser",
          component:AddPurchaser
        }]
      }]
    },
    {
      path:'/xijv',
      name:"xijv",
      component:xijv
    }
  ]
})
