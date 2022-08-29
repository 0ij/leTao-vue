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
    goods: []
  },
  mutations:{
    SET_GOODS: (state, goods) => {
      console.log("store中函数 "+goods)
      state.goods = goods
    }
  },
  actions:{

  }
})

export default store
