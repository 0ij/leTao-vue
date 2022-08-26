import { login, logout, getInfo } from '@/api/login'
import { updateCustomerNameById } from '@/api/user'
//从后端获取数据的接口
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    roles: []

  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {

      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        // login(username, userInfo.password).then(response => {
        //   const data = response.data
        //   setToken(data.token)
        //   commit('SET_TOKEN', data.token)
        //   resolve()
        //   console.log("登录成功！")
        // }).catch(error => {
        //   reject(error)
        // })
        resolve()
      })
    },

    // 获取用户信息
    GetInfo({ commit, state }) {
      console.log("store/modules/user.js中的获取用户信息的函数被调用")
      console.log("测试state: "+state.name)
      return new Promise((resolve, reject) => {
        getInfo(state.token).then(response => {
          const data = response.data
          console.log("response"+response)
          if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
            commit('SET_ROLES', data.roles)
            console.log(data.roles)
          } else {
            reject('getInfo: roles must be a non-null array !')
          }
          commit('SET_NAME', data.name)
          console.log(data.name)
          commit('SET_AVATAR', data.avatar)
          console.log(data.avatar)
          resolve(response)
          console.log("结束2222222")
          console.log("用户名: "+state.name)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    },
    ChangeName({commit,state},info){
      console.log("名字修改函数被调用")
      return new Promise((resolve,reject) => {
        updateCustomerNameById(info.cid,info.cname,info.cpassword).then(response=>{
          const data = response.data
          commit('SET_NAME', data.name)
          console.log(response)
          console.log("名字修改成功")
          resolve(response)
        }).catch(error=>{
          reject(error)
          console.log( "info.cid: "+info.cid+"  info.cname:"+info.cname)
          console.log("失败！")

        })

      })
    }
  }
}

export default user
