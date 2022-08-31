import request from '@/utils/request'

export default {
  getGoodssalesList() {
    return request({
      url: '/goodssales/getGoodssales',
      method: 'get',
    })
  },
  deleteGoodssalesById(gid) {
    return request({
      url: `/goodssales/deleteGoodssalesById?gid=${gid}`,
      method: 'get',
    })
  },
  addGoodssales(goodssales) {
    return request({
      url: '/goodssales/addGoodssales',
      method: 'post',
      // data: goodssales
      params:{
        goodssales:goodssales
      }
    })
  },
  findGoodssalesById(gid) {
    return request({
      url: `/goodssales/getGoodssalesById`,
      method: 'get',
      params:{
        gid:gid
      }
    })
  },
  updateGoodssales(goodssales) {
    return request({
      url: '/goodssales/updateGoodssales',
      method: 'post',
      // data: goodssales
      params:{
        goodssales:goodssales
      }
    })
  }
}
