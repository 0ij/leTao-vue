import { login, logout, getInfo } from '@/api/login'
import { updateCustomerNameById } from '@/api/user'
//从后端获取数据的接口
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    name: 'dasds',
    id: 0,
    avatar: '',
    roles: [],
    info:[]
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_ID: (state,id) => {
      state.id = id
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
    Login({ commit,state }, userInfo) {
      const userid = userInfo.userid
      return new Promise((resolve, reject) => {
        login(userInfo.value,userid, userInfo.password).then(response => {
          const data = response.data
          setToken(data.customer)
          commit('SET_TOKEN', data.customer)
          commit('SET_ID', data.customer.cid)
          commit('SET_NAME', data.customer.cname)
          console.log("store中 "+ state.name)
          resolve()
          console.log("登录成功！")
        }).catch(error => {
          reject(error)
        })
        // resolve()
      })
    },

    //用户的地址订单等信息需要零散分别获取
    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        //token里面包括了登录的username password 以及cid
        getInfo(state.token.cid).then(response => {
          const data = response.data
          // if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
          //   commit('SET_ROLES', data.roles)
          // } else {
          //   reject('getInfo: roles must be a non-null array !')
          // }
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          resolve(response)
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
