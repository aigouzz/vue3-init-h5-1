/*
 * @version: v 1.0.0
 * @Github: https://github.com/aigouzz
 * @Author: aig
 * @LastEditors: aig
 * @FilePath: /vue3-init-h5-1/src/plugins/axios.js
 */
export default [
  {
    path: "/index",
    name: "index",
    meta: {
      index: 1,
    },
    component: () => import("@/views/home/index.vue"),
  },
  {
    path: "/classify",
    name: "classify",
    meta: {
      index: 1,
    },
    component: () => import("@/views/classify/index.vue"),
  },
  {
    path: "/shopCart",
    name: "shopCart",
    meta: {
      index: 1,
    },
    component: () => import("@/views/shopCart/index.vue"),
  },
  {
    path: "/mine",
    name: "mine",
    meta: {
      index: 1,
    },
    component: () => import("@/views/mine/index.vue"),
  },
];
