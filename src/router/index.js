import Vue from 'vue'
import Router from 'vue-router'
// import Register from "@/views/Register";
// import Item from "@/views/Item";
// import Customer from "@/views/Customer";
// import StoreKeeper from "@/views/StoreKeeper";
// import Administrator from "@/views/Administrator";
// import Goods from "@/views/Goods";

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },

  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/userHome',
    name: '个人中心',
    title:'个人中心',
    hidden: true,
    children: [{
      path: 'home',
      name:'home',
      component: () => import('@/views/userHome/index')//点击侧边栏后将跳转到的路径
    }]
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/Register',
        name: 'Register',
        component: () => import('@/views/Register'),
        meta: { title: 'Register', icon: 'Register' }
      },
      {
        path: '/customer',
        name: '/customer',
        component: () => import('@/views/Customer'),
        meta: { title: 'Customer', icon: 'Customer' }
      },
      {
        path: '/StoreKeeper',
        name: '/StoreKeeper',
        component: () => import('@/views/StoreKeeper'),
        meta: { title: 'StoreKeeper', icon: 'StoreKeeper' }
      },
      {
        path: '/Administrator',
        name: '/Administrator',
        component: () => import('@/views/Administrator'),
        meta: { title: 'Administrator', icon: 'Administrator' }
      },
    ]
  },

  {
    path: '/',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: '首页', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'table',
        component: () => import('@/views/shopKeeper/evaluationManage'),
        meta: { title: '评价管理', icon: 'table' }
      },
      {
        path: 'orderManage',
        name: '订单管理',
        component: () => import('@/views/shopKeeper/orderManage'),
        meta: { title: '订单管理', icon: 'table' }
      },
      {
        path: 'requestManage',
        name: '申请管理',
        component: () => import('@/views/admin/requestManage'),
        meta: { title: '申请管理', icon: 'table' }
      },
      {
        path: 'goodsManage',
        name: '商品管理',
        component: () => import('@/views/shopKeeper/goodsManage'),
        meta: { title: '商品管理', icon: 'table' }
      },
      {
        path: 'tree',
        name: '树状图',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      },
      {
        path: 'homeview',
        name: 'HomeView',
        component: () => import('@/views/HomeView'),
        meta: { title: 'HomeView', icon: 'HomeView' }
      },
      {
        path: 'item',
        name: 'Item',
        component: () => import('@/views/Item'),
        meta: { title: 'Item', icon: 'Item' }
      },
      {
        path: 'goods',
        name: 'Goods',
        component: () => import('@/views/Goods'),
        meta: { title: 'Goods', icon: 'Goods' }
      }
    ]
  },
  // {
  //   path: '/',
  //   name: 'Layout',
  //   component: Layout,
  //   redirect: "/home",
  //   children: [
  //     {
  //       path: 'home',
  //       name: 'Home',
  //       component: HomeView
  //     },
  //     {
  //       path: 'item',
  //       name: 'Item',
  //       component: Item
  //     },
  //     {
  //       path: 'goods',
  //       name: 'Goods',
  //       component: Goods
  //     }
  //   ]
  // },
  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '表单',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },


  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: {
  //     title: '啥？',
  //     icon: 'nested'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: 'Menu1' },
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1'),
  //           name: 'Menu1-1',
  //           meta: { title: 'Menu1-1' }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'Menu1-2',
  //           meta: { title: 'Menu1-2' },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'Menu1-2-1',
  //               meta: { title: 'Menu1-2-1' }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'Menu1-2-2',
  //               meta: { title: 'Menu1-2-2' }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'Menu1-3',
  //           meta: { title: 'Menu1-3' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       meta: { title: 'menu2' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
