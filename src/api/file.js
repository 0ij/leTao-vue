import request from '@/utils/request'

export default {
  //路径放入数据库,传url地址以及gid或cid
 savePic(){
   return request({
     url: '/savePic',//后台接口的路径
     method: 'get',//后台接口的请求方式
   })
 },
  getPicByGid(){
    return request({
      url: '/savePic',//后台接口的路径
      method: 'get',//后台接口的请求方式
    })
  }
}
