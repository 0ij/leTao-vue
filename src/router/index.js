import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from "@/views/Login";
import Layout from "@/Layout";
import Register from "@/views/Register";
import Item from "@/views/Item";
import Customer from "@/views/Customer";
import StoreKeeper from "@/views/StoreKeeper";
import Administrator from "@/views/Administrator";
import Goods from "@/views/Goods";

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: 'home',
        name: 'Home',
        component: HomeView
      },
      {
        path: 'item',
        name: 'Item',
        component: Item
      },
      {
        path: 'goods',
        name: 'Goods',
        component: Goods
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/customer',
    name: 'Customer',
    component: Customer
  },
  {
    path: '/storekeeper',
    name: 'StoreKeeper',
    component: StoreKeeper
  },
  {
    path: '/administrator',
    name: 'Administrator',
    component: Administrator
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
