import request from '@/utils/request'

export default {
  getStorekeeperList() {
    return request({
      url: '/storekeeper/getStorekeepers',
      method: 'get',
    })
  },
  deleteStorekeeperById(kid) {
    return request({
      url: `/storekeeper/deleteStorekeeperById?kid=${kid}`,
      //url: `/storekeeper/deleteStorekeeperById?kid`,
      method: 'get',
      params:{
        kid:kid
      }
    })
  },
  addStorekeeper(storekeeper) {
    return request({
      url: '/storekeeper/addStorekeeper',
      method: 'post',
      // data: storekeeper
      headers:{
        "Content-Type":"application/json",
      },
      data:JSON.stringify(storekeeper)
    })
  },
  findStorekeeperById(kid) {
    return request({
      // url: `/storekeeper/getStorekeeperById/${kid}`,
      url: `/storekeeper/getStorekeeperById`,
      method: 'get',
      params:{
        kid:kid
      }
    })
  },
  updateStorekeeper(storekeeper) {
    return request({
      url: '/storekeeper/updateStorekeeper',
      method: 'post',
      // data: storekeeper
      headers:{
        "Content-Type":"application/json",
      },
      data:JSON.stringify(storekeeper)
    })
  }
}
