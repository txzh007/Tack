const Mock = require("mockjs");
const { deepClone } = require("../utils");
const { asyncRoutes, constantRoutes } = require("./routes.js");

// const routes = deepClone([...constantRoutes, ...asyncRoutes]);
const routes = asyncRoutes;

module.exports = [
  // mock get all routes form server
  {
    url: "/tack/routes",
    type: "get",
    response: _ => {
      return {
        code: 20000,
        data: routes
      };
    }
  }
];
