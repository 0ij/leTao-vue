import request from '@/utils/request'

export function CustomerLogin(customer) {
  return request({
    url: "/customer/login",
    method: "post",
    params: {
      customer: customer
    }
  })
}
