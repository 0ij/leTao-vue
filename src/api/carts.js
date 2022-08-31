import request from '@/utils/request'

export default {
  //获取我的购物车
  getCartsList(id){
    return request({
      url: '/carts/getCarts',//后台接口的路径
      method: 'get',//后台接口的请求方式
      params:{
        id:id
      }
    })
  },
  getEvaluationByOid(id){
    return request({
      url: '/evaluation/getEvaluationByOid',//后台接口的路径
      method: 'post',//后台接口的请求方式
      params:{
        oid:oid
      }
    })
  },
  delcartsbyid(gid,cid){
    return request({
      url: '/carts/delCartsByID',//后台接口的路径
      method: 'get',//后台接口的请求方式
      params:{
        gid:gid,
        cid:cid
      }
    })
  }
}
