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
      method: 'get',
    })
  },
  addStorekeeper(storekeeper) {
    return request({
      url: '/storekeeper/addStorekeeper',
      method: 'post',
      data: storekeeper
    })
  },
  findStorekeeperById(kid) {
    return request({
      url: `/storekeeper/getStorekeeperById/${kid}`,
      method: 'get',
    })
  },
  updateStorekeeper(storekeeper) {
    return request({
      url: '/storekeeper/updateStorekeeper',
      method: 'post',
      data: storekeeper
    })
  }
}