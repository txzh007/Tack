import { get, post, put, del } from "@/utils/request";

export function getToken() {
  // 假地址 自行替换
  return get("/qiniu/upload/token");
}
