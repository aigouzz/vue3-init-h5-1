/*
 * @version: v 1.0.0
 * @Github: https://github.com/aigouzz
 * @Author: aig
 * @LastEditors: aig
 * @FilePath: /vue3-init-h5-1/src/plugins/axios.js
 */
export default [
  {
    path: "/order/appealRecord",
    name: "appealRecord",
    meta: {
      index: 12,
    },
    component: () => import("@/views/order/appealRecord.vue"),
  },
];
