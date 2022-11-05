<!--/*
 * @version: v 1.0.0
 * @Github: https://github.com/aigouzz
 * @Author: aig
 * @LastEditors: aig
 * @FilePath: /vue3-init-h5-1/src/plugins/axios.js
 */-->
<template>
  <div class="home">
    <header class="home-header" :class="{ active: headerActive }">
      <div class="header-search">
        <svg-icon class="search-icon" icon-class="search"></svg-icon>
        <router-link slots="span" class="search-title" to="./search"
          >推荐搜索 关键词</router-link
        >
      </div>
      <svg-icon
        class="customer-service-icon"
        icon-class="customer-service"
      ></svg-icon>
    </header>
    <van-swipe
      class="swiper-carousel"
      lazy-render
      :autoplay="3000"
      :show-indicators="false"
    >
      <van-swipe-item v-for="(image, index) in homeImgs" :key="index">
        <img class="lazy_img" @click="handleClick" :src="image.imgUrl" />
      </van-swipe-item>
    </van-swipe>

    <section class="home-tags">
      <ul class="tags-content">
        <router-link slots="li" class="tags-item" to="./search">
          <van-icon name="gift"></van-icon>
          <span class="item-text">链猫精品</span>
        </router-link>
        <router-link slots="li" class="tags-item" to="./search">
          <van-icon name="gift"></van-icon>
          <span class="item-text">CM专区</span>
        </router-link>
        <router-link slots="li" class="tags-item" to="./search">
          <van-icon name="gift"></van-icon>
          <span class="item-text">领CM币</span>
        </router-link>
        <router-link slots="li" class="tags-item" to="./search">
          <van-icon name="gift"></van-icon>
          <span class="item-text">领券</span>
        </router-link>
        <router-link slots="li" class="tags-item" to="./search">
          <van-icon name="gift"></van-icon>
          <span class="item-text">链猫会员</span>
        </router-link>
      </ul>
    </section>

    <section class="spike-area">
      <ul class="spike-top">
        <router-link class="top-left" to="/chainCatSpike" slots="li">
          <div class="item-top">
            <span class="item-title">链猫秒杀</span>
            <div class="time-text">
              <span class="eight-time">8点场</span>
              <van-count-down :time="timeData" class="time-count-down">
                <template v-slot="timeData">
                  <span class="time-item" v-if="timeData.hours < 10">{{
                    "0" + timeData.hours
                  }}</span>
                  <span class="time-item" v-else>{{ timeData.hours }}</span>
                  <i class="tow-point">:</i>
                  <span class="time-item" v-if="timeData.minutes < 10">{{
                    "0" + timeData.minutes
                  }}</span>
                  <span class="time-item" v-else>{{ timeData.minutes }}</span>
                  <i class="tow-point">:</i>
                  <span class="time-item" v-if="timeData.seconds < 10">{{
                    "0" + timeData.seconds
                  }}</span>
                  <span class="time-item" v-else>{{ timeData.seconds }}</span>
                </template>
              </van-count-down>
            </div>
          </div>
          <div class="item-info">
            <div class="item-content">
              <img src="../../assets/image/home/demo1.png" />
              <span class="new-price">¥298</span>
              <span class="old-price">¥399</span>
            </div>
            <div class="item-content">
              <img src="../../assets/image/home/demo2.png" />
              <span class="new-price">¥298</span>
              <span class="old-price">¥399</span>
            </div>
            <div class="item-content">
              <img src="../../assets/image/home/demo3.png" />
              <span class="new-price">¥298</span>
              <span class="old-price">¥399</span>
            </div>
          </div>
        </router-link>
        <router-link class="top-right" to="/foundGoodGoods" slots="li">
          <div class="right-header">
            <span class="cat-spike-text">发现好货</span>
            <span class="tag-text">品质好物</span>
          </div>
          <span class="good-item">好物不贵</span>
          <div class="item-imgs">
            <img src="../../assets/image/home/demo4.png" />
            <img src="../../assets/image/home/demo5.png" />
          </div>
        </router-link>
      </ul>

      <ul class="spike-center">
        <router-link class="center-item" to="/specialSpike" slots="li">
          <span class="center-title">特价秒杀</span>
          <span class="center-descr">10元抢购</span>
          <img src="../../assets/image/home/demo6.png" />
        </router-link>
        <router-link class="center-item" to="/brandSpike" slots="li">
          <span class="center-title">品牌秒杀</span>
          <span class="center-descr" style="color: #dd3749">笔记本秒杀</span>
          <img src="../../assets/image/home/demo7.png" />
        </router-link>
        <router-link class="center-item" to="/newProductLaunch" slots="li">
          <span class="center-title">新品首发</span>
          <span class="center-descr" style="#FC6380">小黑盒新品</span>
          <img src="../../assets/image/home/demo8.png" />
        </router-link>
        <router-link class="center-item" to="/premiumRanking" slots="li">
          <span class="center-title">优品排行</span>
          <span class="center-descr" style="color: #91c95b">榜上好物购</span>
          <img src="../../assets/image/home/demo9.png" />
        </router-link>
      </ul>
      <ul class="spike-bottom">
        <li class="bottom-left">
          <div class="bottom-left-header">
            <span class="big-buy">大牌购走</span>
            <span class="goods-name">
              戴尔
              <svg-icon icon-class="right-arrow"></svg-icon>
            </span>
          </div>
          <span class="belive-big">信赖大品牌</span>
          <div class="bottom-images">
            <img src="../../assets/image/home/demo10.png" />
            <img src="../../assets/image/home/demo11.png" />
          </div>
        </li>
        <router-link class="bottom-left" to="/loveShop" slots="li">
          <div class="bottom-left-header">
            <span class="big-buy">爱逛好店</span>
            <span class="goods-name addColor">懂你所要</span>
          </div>
          <span class="belive-big">来逛个够</span>
          <div class="bottom-images">
            <img src="../../assets/image/home/demo12.png" />
            <img src="../../assets/image/home/demo13.png" />
          </div>
        </router-link>
      </ul>
    </section>

    <div class="content-tabs">
      <van-tabs
        :swipe-threshold="5"
        title-inactive-color="#3a3a3a"
        title-active-color="#D8182D"
        background="transparent"
        v-model="active"
        animated
      >
        <van-tab
          v-for="(list, index) in tabArray"
          :title="list.describe"
          :name="list.type"
          :key="index"
        >
          <template #title>
            <div class="slot-title">
              <b class="tab-title">{{ list.title }}</b>
              <!-- <span class="tab-name">{{list.describe}}</span> -->
              <span class="tab-name">{{ list.name }}</span>
            </div>
          </template>

          <section class="goods-box search-wrap">
            <ul class="goods-content">
              <li v-for="(item, index) in list.list" :key="index">
                <router-link
                  class="goods-img"
                  slots="div"
                  to="/classify/product"
                >
                  <img :src="item.img" />
                </router-link>
                <div class="goods-layout">
                  <div class="goods-title">{{ item.productName }}</div>
                  <span class="goods-div">{{ item.title }}</span>
                  <div class="goods-desc">
                    <span class="goods-price">
                      <i>{{ item.productCnyPrice }}</i>
                      <span class="force-value"
                        >{{ item.forceValue }}倍算力</span
                      >
                    </span>
                    <span class="add-icon" @click="addToCart($event, item)">
                      <svg-icon icon-class="add"></svg-icon>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </van-tab>
      </van-tabs>
    </div>
    <div class="ballWrap">
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @afterEnter="afterEnter"
      >
        <div class="ball" v-if="show">
          <li class="inner">
            <span class="cubeic-add" @click="addToCart($event, item)">
              <svg-icon class="add-icon" icon-class="add"></svg-icon>
            </span>
          </li>
        </div>
      </transition>
    </div>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import { ref, reactive, onMounted, toRefs, getCurrentInstance } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { getHomeData } from "@/plugins/request";
export default {
  name: "indexHome",
  setup(props, context) {
    const { proxy } = getCurrentInstance();
    const $store = useStore();
    // ctx.$store === $store  ==>true 其实是同一个对象！

    const $router = useRouter();
    const $route = useRoute(); // 可以拿到所有和路由相关的参数
    const active = ref("");
    const timeData = ref(36000000);
    const headerActive = ref(false);

    const state = reactive({
      homeImgs: [],
      tabArray: [],
    });

    const ball = reactive({
      show: false,
      el: "",
    });

    getHomeData().then((res) => {
      const { images, tabList } = res.data;
      state.tabArray = tabList;
      state.homeImgs = images;
    });

    onMounted(() => {
      proxy.$eventBus.$emit("changeTag", 0);
      window.addEventListener("scroll", pageScroll);
    });

    const addToCart = (event, tag) => {
      $store.commit("cart/addToCart", tag);
      ball.show = true;
      ball.el = event.target;
    };

    const beforeEnter = (el) => {
      const dom = ball.el;
      const rect = dom.getBoundingClientRect();
      const x = rect.left - window.innerWidth * 0.6;
      const y = -(window.innerHeight - rect.top);
      el.style.display = "block";
      el.style.transform = `translate3d(0,${y}px,0)`;
      const inner = el.querySelector(".inner");
      inner.style.transform = `translate3d(${x}px,0,0)`;
    };

    const enter = (el, done) => {
      document.body.offsetHeight;
      el.style.transform = "translate3d(0,0,0)";
      const inner = el.querySelector(".inner");
      inner.style.transform = "translate3d(0,0,0)";
      el.addEventListener("transitionend", done);
    };

    const afterEnter = (el) => {
      ball.show = false;
      el.style.display = "none";
    };

    const handleClick = (linkUrl) => {
      $router.push("/classify/product");
    };

    const pageScroll = () => {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      scrollTop > 100
        ? (headerActive.value = true)
        : (headerActive.value = false);
    };

    return {
      active,
      timeData,
      headerActive,
      ...toRefs(ball),
      ...toRefs(state),
      addToCart,
      beforeEnter,
      enter,
      afterEnter,
      handleClick,
      pageScroll,
    };
  },
};
</script>

<style scoped lang="scss" src="./index.scss"></style>
