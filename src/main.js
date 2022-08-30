import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'
// import axios from 'axios'

import '@/icons' // icon
import '@/permission' // permission control

ElementUI.Dialog.props.closeOnClickModal.default = false;
Vue.use(ElementUI, { locale })

// Vue.prototype.$axios = axios
// axios.defaults.baseURL = '/api'        //关键代码
Vue.config.silent = true

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
