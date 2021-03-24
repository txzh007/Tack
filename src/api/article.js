import request from '@/utils/request'

export function fetchList(query) {
  return request.get('/tack/article/list', query)
}

export function fetchArticle(id) {
  return request.get('/tack/article/detail', { id })
}

export function fetchPv(pv) {
  return request.get('/tack/article/pv', { pv })
}

export function createArticle(data) {
  return request.post('/tack/article/create', data)
}

export function updateArticle(data) {
  return request.post('/tack/article/update', data)
}
