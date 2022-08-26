import request from '@/utils/request'

//订单界面设计的接口
export default {
  //获取所有订单
  getRequestList(){
    return request({
      url: '/request/getRequests',//后台接口的路径
      method: 'get',//后台接口的请求方式
    })
  },
  getRequestById(rid){
    return request({
      url: '/request/getRequestByID',//后台接口的路径
      method: 'post',//后台接口的请求方式
      contentType:"application/json",
      params:{
        rid:rid
      }
    })
  },
  changeResult(form){
    return request({
      url: '/request/updateRequest',//后台接口的路径
      method: 'post',//后台接口的请求方式
      headers:{
        "Content-Type":"application/json",
      },
      data:JSON.stringify(form)
    })
  }
}
