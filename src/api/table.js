import request from '@/utils/request'

export function getList(params) {
  return request({
    url: 'order/getOrder',
    method: 'get',
    params
  })
}
