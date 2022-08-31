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
  findShopById(sid) {
    return request({
      url: `/shop/getShopById`,
      method: 'get',
      params:{
        sid:sid
      }
    })
  },
  findShopByName(name) {
    return request({
      url: `/shop/getShopByName`,
      method: 'get',
      params:{
        name:name
      }
    })
  },
  addShop(shop) {
    return request({
      url: `/shop/addShop`,
      method: 'post',
      // data: shop
      headers:{
        "Content-Type":"application/json",
      },
      data:JSON.stringify(shop)
    })
  },
  updateShop(shop) {
    return request({
      url: `/shop/updateShop`,
      method: 'post',
      // data: shop
      headers:{
        "Content-Type":"application/json",
      },
      data:JSON.stringify(shop)
    })
  }
}
