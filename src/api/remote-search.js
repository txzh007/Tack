import request from '@/utils/request'

export function searchUser(name) {
  return request({
    url: '/tack/search/user',
    method: 'get',
    params: { name }
  })
}

export function transactionList(query) {
  return request({
    url: '/tack/transaction/list',
    method: 'get',
    params: query
  })
}
