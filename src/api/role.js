import request from '@/utils/request'

export function getRoutes() {
  return request({
    url: '/tack/routes',
    method: 'get'
  })
}
