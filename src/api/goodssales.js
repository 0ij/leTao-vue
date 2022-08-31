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
      url: `/goodssales/deleteGoodssalesById`,
      method: 'get',
      params:{
        gid:gid
      }
    })
  },
  addGoodssales(goodssales) {
    return request({
      url: '/goodssales/addGoodssales',
      method: 'post',
      // data: goodssales
      headers:{
        "Content-Type":"application/json",
      },
      data:JSON.stringify(goodssales)
    })
  },
  findGoodssalesByGid(gid) {
    return request({
      url: `/goodssales/getGoodssalesByGid`,
      method: 'get',
      params:{
        gid:gid
      }
    })
  },
  findGoodssalesBySid(sid) {
    return request({
      url: `/goodssales/getGoodssalesBySid`,
      method: 'get',
      params:{
        sid:sid
      }
    })
  },
  updateGoodssales(goodssales) {
    console.log("goodssales"+goodssales);
    return request({
      url: '/goodssales/updateGoodssales',
      method: 'post',
      // data: goodssales
      headers:{
        "Content-Type":"application/json",
      },
      data:JSON.stringify(goodssales)
    })
  }
}
