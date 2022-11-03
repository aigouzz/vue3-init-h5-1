/*
 * @version: v 1.0.0
 * @Github: https://github.com/aigouzz
 * @Author: aig
 * @LastEditors: aig
 * @FilePath: /vue-init-h5-1/src/router/index.js
 */
import { createRouter, createWebHistory } from "vue-router";

const indexRouter = {
  path: "/",
  component: () => import("@/views/index.vue"),
  redirect: "/index",
  children: [],
};

const routes = [
  indexRouter,
  {
    path: "/nopermission",
    name: "nopermission",
    meta: {
      index: 1,
    },
    component: () => import("@/views/error/NoPermission.vue"),
  },
  {
    path: "/:w+",
    name: "404",
    meta: {
      index: 1,
    },
    component: () => import("@/views/error/404.vue"),
  },
];

const routerContext = require.context("./modules", true, /\.ts$/);
routerContext.keys().forEach((route) => {
  const routerModule = routerContext(route);
  indexRouter.children = indexRouter.children.concat(
    routerModule.default || routerModule
  );
});

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
