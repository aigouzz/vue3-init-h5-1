<!--
 * @version: v 2.1.1
 * @Github: https://github.com/aigouzz
 * @Author: aig
 * @LastEditors: aig
 * @FilePath: /vue3-init-h5-1/src/views/index.vue
 -->
<template>
  <router-view class="router-view" />
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "index",
};
</script>

<style lang="scss" scoped>
/*切换样式出错处理*/
.router-view {
  width: 100%;
  height: 100%;
  -webkit-overflow-scrolling: touch;
}
</style>
