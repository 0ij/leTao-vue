import request from '@/utils/request'

export default {
  //获取所有订单
  getGoodsList(){
    return request({
      url: '/Goods/getGoods',//后台接口的路径
      method: 'get',//后台接口的请求方式
    })
  },
  findGoodsById(Gid){
    return request({
      url: '/Goods/getGoodsByID',//后台接口的路径
      method: 'post',//后台接口的请求方式
      params:{
        Gid:Gid
      }
    })
  },

  updateGoods(goods){
    return request({
      url: '/Goods/updateGoods',//后台接口的路径
      method: 'post',//后台接口的请求方式
      params:{
        goods:goods
      }
    })
  },
}
