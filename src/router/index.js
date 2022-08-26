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
import Login from "../views/Login";

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
    redirect: 'userHome',
    name: '个人中心',
    title:'个人中心',
    hidden: true,//不隐藏
    children: [{
      path: 'home',
      name:'home',
      component: () => import('@/views/userHome/index')//点击侧边栏后将跳转到的路径
    }]
  },

  {
    path: '/user',
    component: () => import('@/views/Login'),
    name: 'Login',
    meta: { title: 'Login', icon: 'table' }
  },
  {
    path: '/customer',
    component: () => import('@/views/Customer'),
    name: 'Customer',
    meta: { title: 'Customer', icon: 'user' }
  },

  {
    path: '/storekeeper',
    component: () => import('@/views/StoreKeeper'),
    name: 'StoreKeeper',
    meta: { title: 'Storekeeper', icon: 'user' }
  },

  {
    path: '/administrator',
    component: () => import('@/views/Administrator'),
    name: 'Administrator',
    meta: { title: 'Administrator', icon: 'user' }
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
        path: 'homeview',
        name: '主页',
        component: () => import('@/views/HomeView'),
        meta: { title: '商品主页', icon: 'nested' }
      },
      {
        path: 'item',
        name: 'Item',
        component: () => import('@/views/Item'),
        meta: { title: '商品详情', icon: 'table' }
      },
      {
        path: 'goods',
        name: 'Goods',
        component: () => import('@/views/Goods'),
        meta: { title: 'Goods', icon: 'table' }
      }
    ]
  },

  {
    path: '/shop',
    component: Layout,
    redirect: '/shop/table',
    name: 'Shop',
    meta: { title: 'Shop', icon: 'eye' },
    children: [
      {
        path: 'table',
        name: 'ShopList',
        component: () => import('@/views/shop/list'),
        meta: { title: 'ShopList', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'ShopAdd',
        component: () => import('@/views/shop/save'),
        meta: { title: 'ShopAdd', icon: 'tree' }
      },
      {
        path: 'edit/:sid',
        name: 'ShopEdit',
        component: () => import('@/views/shop/save'),
        meta: { title: 'ShopEdit', icon: 'tree' },
        hidden: true
      }
    ]
  },

  {
    path: '/goodssales',
    component: Layout,
    redirect: '/goodssales/table',
    name: 'Goodssales',
    meta: { title: 'Goodssales', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'GoodssalesList',
        component: () => import('@/views/goodssales/list'),
        meta: { title: 'GoodssalesList', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'GoodssalesAdd',
        component: () => import('@/views/goodssales/save'),
        meta: { title: 'GoodssalesAdd', icon: 'tree' }
      },
      {
        path: 'edit/:gid',
        name: 'GoodssalesEdit',
        component: () => import('@/views/goodssales/save'),
        meta: { title: 'GoodssalesEdit', icon: 'tree' },
        hidden: true
      }
    ]
  },

  {
    path: '/storekeeper',
    component: Layout,
    redirect: '/storekeeper/table',
    name: 'Storekeeper',
    meta: { title: 'Storekeeper', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'StorekeeperList',
        component: () => import('@/views/storekeeper/list'),
        meta: { title: 'StorekeeperList', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'StorekeeperAdd',
        component: () => import('@/views/storekeeper/save'),
        meta: { title: 'StorekeeperAdd', icon: 'tree' }
      },
      {
        path: 'edit/:kid',
        name: 'StorekeeperEdit',
        component: () => import('@/views/storekeeper/save'),
        meta: { title: 'StorekeeperEdit', icon: 'tree' },
        hidden: true
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

// this.$router.beforeEach((to, from, next) => {
//   const token = localStorage.token;
//
//   if (token) {
//     // 如果已经登录了，自己非要手动访问登录页，则自动跳转到首页
//     if (to.path === "/customer") {
//       next({ path: "/home" });
//     }
//     next();
//   } else {
//     next({
//       path: "/customer",
//     });
//   }
// })
//
//
// this.$router.afterEach((to, from, next) => {
//   console.log('后置路由守卫afterEach')
//   next()
// })
//
// this.$router.beforeResolve((to, from, next) => {
//   console.log('全局解析守卫beforeResolve')
//   next()
// })

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
