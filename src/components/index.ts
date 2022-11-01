/*
 * @version: v 1.0.0
 * @Github: https://github.com/aigouzz
 * @Author: aig
 * @LastEditors: aig
 * @FilePath: /vue3-init-h5-1/src/components/index.js
 */

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function validateFileName(str: string) {
  return (
    /^\S+\.vue$/.test(str) &&
    str.replace(/^\S+\/(\w+)\.vue$/, (_rs: string, $1: string): void => {
      capitalizeFirstLetter($1);
    })
  );
}

const requireComponent = require.context(".", true, /\.vue$/);

export default {
  install(app: any) {
    // 找到组件文件夹下以.vue命名的文件，如果文件名为index，那么取组件中的name作为注册的组件名
    requireComponent.keys().forEach((filePath) => {
      const componentConfig = requireComponent(filePath);
      const fileName = validateFileName(filePath);
      const componentName =
        (fileName as string).toLowerCase() === "index"
          ? capitalizeFirstLetter(componentConfig.default.name)
          : fileName;
      app.component(componentName, componentConfig.default || componentConfig);
    });
  },
};
