import request from '@/utils/request'

//订单界面设计的接口
export default {
  //获取所有订单
  getOrderList(){
    return request({
      url: '/order/getOrders',//后台接口的路径
      method: 'get',//后台接口的请求方式
    })
  },

  getOrderById(oid){
    return request({
      url: '/order/getOrderByOid/oid',//后台接口的路径
      method: 'get',//后台接口的请求方式
    })
  },

  updateOrder(order){
    return request({
      url: '/order/updateOrder',//后台接口的路径
      method: 'post',//后台接口的请求方式
      data:order
    })
  },
}
