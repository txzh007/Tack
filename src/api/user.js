import request from '@/utils/request'

export function login(data) {
  return request.post('/tack/user/login', data)
}

export function getInfo(token) {
  return request.get('/tack/user/info', { token })
}

export function logout() {
  return request.post('/tack/user/logout')
}
