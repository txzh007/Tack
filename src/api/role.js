import request from '@/utils/request'

export function getRoutes() {
  return request.get('/tack/routes')
}
