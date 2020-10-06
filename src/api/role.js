import { get, post, put, del } from "@/utils/request";

export function getRoutes() {
  return get("/tack/routes");
}
