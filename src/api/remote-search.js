import request from '@/utils/request'

export function searchUser(name) {
  return request.get('/tack/search/user', { name })
}

export function transactionList(query) {
  return request.get('/tack/transaction/list', query)
}
