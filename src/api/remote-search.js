import { get, post, put, del } from "@/utils/request";

export function searchUser(name) {
  return get("/tack/search/user", { name });
}

export function transactionList(query) {
  return get("/tack/transaction/list", query);
}
