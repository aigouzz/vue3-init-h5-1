<!--
 * @version: v 1.0.0
 * @Github: https://github.com/aigouzz
 * @Author: aig
 * @LastEditors: aig
 * @FilePath: /vue3-init-h5-1/src/components/tabbar/index.vue
-->
<template>
  <div class="tabbar">
    <van-tabbar
      route
      v-model="active"
      @change="tabChange(active)"
      active-color="#FE4F70"
      inactive-color="#949497"
      style="z-index: 100"
    >
      <van-tabbar-item name="index" icon="home-o" to="/index">
        首页
      </van-tabbar-item>
      <van-tabbar-item name="classify" icon="apps-o" to="/classify">
        分类
      </van-tabbar-item>
      <van-tabbar-item
        name="shopCart"
        icon="shopping-cart-o"
        to="/shopCart"
        :badge="count"
      >
        购物车
      </van-tabbar-item>
      <van-tabbar-item name="mine" icon="user-o" to="/mine">
        我
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { computed, ref, getCurrentInstance } from "vue";
import { useStore } from "vuex";
export default {
  name: "tabbar",
  setup(props, context) {
    const { attrs, emit, slots } = context;
    const currentInstance = getCurrentInstance();

    const { ctx } = currentInstance;
    const active = ref(0);
    const store = useStore();

    ctx.$eventBus.$on(
      "changeTag",
      (tag) => {
        active.value = tag;
      },
      currentInstance
    );

    const count = computed(() => store.state.cart.count);
    return {
      active,
      count,
    };
  },
  methods: {
    tabChange(active) {
      console.log("==active=====>", active);
    },
  },
};
</script>
