import { get, post, put, del } from "@/utils/request";

export function fetchList(query) {
  return get("/tack/article/list", query);
}

export function fetchArticle(id) {
  return get("/tack/article/detail", { id });
}

export function fetchPv(pv) {
  return get("/tack/article/pv", { pv });
}

export function createArticle(data) {
  return post("/tack/article/create", data);
}

export function updateArticle(data) {
  return post("/tack/article/update", data);
}
