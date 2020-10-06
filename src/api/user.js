import { get, put, post, del } from "@/utils/request";

export function login(data) {
  return post("/tack/user/login", data);
}

export function getInfo(token) {
  return get("/tack/user/info", { token });
}

export function logout() {
  return post("/tack/user/logout");
}
