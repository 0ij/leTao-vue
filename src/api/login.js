import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/user/login',//后台接口的路径
    method: 'post',//后台接口的请求方式
    params: {
      username,
      password
    }
  })
}

//获取登录用户的所有信息
export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}


export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
