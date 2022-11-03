/*
 * @version: v 1.0.0
 * @Github: https://github.com/aigouzz
 * @Author: aig
 * @LastEditors: aig
 * @FilePath: /vue3-init-h5-1/src/icons/index.js
 */
import SvgIcon from "@/components/SvgIcon/index.vue";

const requireAll = (requireContext: any) => {
  requireContext.keys().map(requireContext);
};

export default {
  install(app: any) {
    app.component("svg-icon", SvgIcon);
    const req = require.context("./svgs/", false, /\.svg$/);
    requireAll(req);
  },
};
