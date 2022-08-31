import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import getters from './getters'
import goods from "../api/goods";
import order from "../api/order";

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    goods,
    order
  },
  getters,

  state:{
    shop:[],
    goods: [],
    gs:[],
    storekeeper:[],
    goodsmanageInfo:[],
    //name:'ffff'
  },
  mutations:{
    SET_GOODS: (state, goods) => {
      console.log("store中函数 "+goods)
      state.goods = goods
    },
    SET_SHOP: (state, shop) => {
      console.log("store中函数 "+shop)
      state.shop = shop
    },
    SET_GS: (state, gs) => {
      console.log("store中goodsSale "+gs)
      state.gs = gs
    },
    SET_STOREKEEPER: (state, storekeeper) => {
      state.storekeeper = storekeeper
    },
    SET_GOODSMANAGEINFO: (state, goodsmanageInfo) => {
      state.goodsmanageInfo = goodsmanageInfo
    },
  },
  actions:{

  }
})

export default store
