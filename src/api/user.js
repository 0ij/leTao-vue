import request from '@/utils/request'

export default {
  updateCustomerNameById(cid,name){
    return request({
      url: '/customer/updateCustomerName',//后台接口的路径
      method: 'post',//后台接口的请求方式
      data: {
        cid,
        name
      }
    })
  },
  //获取所有订单
  getUserInfo(){
    return request({
      url: '/customer/getCustomer',//后台接口的路径
      method: 'get',//后台接口的请求方式
    })
  },

  changeAvatar(){
    return request({
      url: '/upload',//后台接口的路径
      method: 'post',//后台接口的请求方式

    })
  }
}
