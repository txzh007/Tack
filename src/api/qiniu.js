import request from '@/utils/request'

export function getToken() {
  // 假地址 自行替换
  return request.get('/qiniu/upload/token')
}
