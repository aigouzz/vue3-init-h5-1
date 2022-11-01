/*
 * @version: v 1.0.0
 * @Github: https://github.com/aigouzz
 * @Author: aig
 * @LastEditors: aig
 * @FilePath: /vue3-init-h5-1/src/plugins/axios.js
 */
export default [
  {
    path: "/classify/product",
    name: "product",
    meta: {
      index: 25,
    },
    component: () => import("@/views/product/index.vue"),
  },
];
