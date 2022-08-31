import request from '@/utils/request'

export function updateCustomerNameById(cid,cname,cpassword){
  return request({
    url: '/customer/updateCustomerName',//后台接口的路径
    method: 'post',//后台接口的请求方式
    params: {
      cname:cname,
      cpassword:cpassword,
      cid:cid
    }
  })
}

export default {
  // updateCustomerNameById(cid,name){
  //   return request({
  //     url: '/customer/updateCustomerName',//后台接口的路径
  //     method: 'post',//后台接口的请求方式
  //     params: {
  //       cid:cid,
  //       name:name
  //     }
  //   })
  // },
  //获取所有顾客的信息
  getUserInfo(){
    return request({
      url: '/customer/getCustomer',//后台接口的路径
      method: 'get',//后台接口的请求方式
    })
  },

  changeAvatar(){
    console.log("api/user.js 修改头像")
    return request({
      url: '/upload',//后台接口的路径
      method: 'post',//后台接口的请求方式

    })
  },
  getAddress(cid){
    return request({
      url: '/Address/getAddressByCid',//后台接口的路径
      method: 'get',//后台接口的请求方式
      params:{
        cid:cid
      }
    })
  }
}
