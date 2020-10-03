import { constantRoutes } from "@/router";
import { getRoutes } from "@/api/role";
import layout from "@/layout";
/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 */
export function filterAsyncRoutes(routes) {
  const res = [];

  routes.forEach(route => {
    const tmp = { ...route };
    if (tmp.children) {
      tmp.children = filterAsyncRoutes(tmp.children);
    }
    res.push(tmp);
  });

  return res;
}
// 将接口信息生成前端路由
export function getAsyncRoutes(routes) {
  const res = [];
  // 定义路由中需要的自定名
  const keys = ["path", "name", "children", "redirect", "hidden", "alwaysShow"];
  // 遍历路由数组去重组可用的路由
  routes.forEach(item => {
    const newItem = {};
    if (item.component) {
      // 判断 item.component 是否等于 'Layout',若是则直接替换成引入的 Layout 组件
      if (item.component === "layout") {
        newItem.component = layout;
      } else {
        //  item.component 不等于 'Layout',则说明它是组件路径地址，因此直接替换成路由引入的方法
        newItem.component = resolve =>
          require([`@/views/${item.component}`], resolve);
      }
    }
    for (const key in item) {
      if (key === undefined) {
        console.log("underfined");
      }

      // 跳过component
      if (key === "component") {
        continue;
      } else if (keys.includes(key)) {
        newItem[key] = item[key];
      } else {
        // 初始化meta对象  直接复制会报错
        if (!newItem.meta) {
          newItem.meta = {};
        }
        newItem["meta"][key] = item[key];
      }
    }
    // 若遍历的当前路由存在子路由，需要对子路由进行递归遍历
    if (newItem.children && newItem.children.length) {
      newItem.children = getAsyncRoutes(item.children);
    }
    res.push(newItem);
  });
  // 返回处理好且可用的路由数组
  return res;
}

const state = {
  routes: [],
  addRoutes: []
};

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes;
    state.routes = constantRoutes.concat(routes);
  }
};

const actions = {
  generateRoutes({ commit }) {
    return new Promise(resolve => {
      // asyncRoutes 加工
      getRoutes().then(res => {
        console.log("router");
        const asyncRoutes = getAsyncRoutes(res.data);
        let accessedRoutes = filterAsyncRoutes(asyncRoutes);
        commit("SET_ROUTES", accessedRoutes);
        resolve(accessedRoutes);
      });
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
