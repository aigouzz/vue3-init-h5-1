/*
 * @version: v 1.0.0
 * @Github: https://github.com/aigouzz
 * @Author: aig
 * @LastEditors: aig
 * @FilePath: /vue3-init-h5-1/src/plugins/axios.js
 */
export default [
  {
    path: "/mine/addAddress",
    name: "addAddress",
    meta: {
      index: 13,
    },
    component: () => import("@/views/mine/addAddress.vue"),
  },
];
