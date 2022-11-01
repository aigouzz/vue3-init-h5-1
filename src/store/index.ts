/*
 * @version: v 1.0.0
 * @Github: https://github.com/aigouzz
 * @Author: aig
 * @LastEditors: aig
 * @FilePath: /vue3-init-h5-1/src/plugins/axios.js
 */

import { createStore } from "vuex";

import cart from "./modules/cart";
import search from "./modules/search";

export default createStore({
  modules: {
    cart,
    search,
  },
  strict: process.env.NODE_ENV !== "production",
});
