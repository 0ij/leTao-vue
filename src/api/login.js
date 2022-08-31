import request from '@/utils/request'

export function login(value,userid, password) {
  return request({
    url: '/user/login',//后台接口的路径
    method: 'post',//后台接口的请求方式
    params: {
      userid:userid,
      password: password,
      value:value
    }
  })
}

//获取登录用户的基本信息
export function getInfo(cid) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { cid:cid}
  })
}


export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
