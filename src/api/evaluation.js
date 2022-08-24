import request from '@/utils/request'

//评价所需的界面
export default {
  //获取所有评价
  getEvaluationList(){
    return request({
      url: '/evaluation/getEvaluations',//后台接口的路径
      method: 'get',//后台接口的请求方式

    })
  },
  getEvaluationByOid(id){
    return request({
      url: '/evaluation/getEvaluationByOid',//后台接口的路径
      method: 'post',//后台接口的请求方式
      data:{
        id
      }
    })
  }
}
