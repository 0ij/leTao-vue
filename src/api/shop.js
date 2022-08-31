import request from '@/utils/request'

export default {
  getShopList() {
    return request({
      url: `/shop/getShops`,
      method: 'get',
    })
  },
  deleteShopById(sid) {
    return request({
      url: `/shop/deleteShopById?sid=${sid}`,
      method: 'get',
      params:{
        sid:sid
      }
    })
  },
  addShop(shop) {
    return request({
      url: `/shop/addShop`,
      method: 'post',
      // data: shop
      params:{
        shop:shop
      }
    })
  },
  findShopById(sid) {
    return request({
      url: `/shop/getShopById/${sid}`,
      method: 'get',
      params:{
        sid:sid
      }
    })
  },
  updateShop(shop) {
    return request({
      url: `/shop/updateShop`,
      method: 'post',
      // data: shop
      params:{
        shop:shop
      }
    })
  }
}
