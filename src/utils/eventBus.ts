/*
 * @version: v 1.0.0
 * @Github: https://github.com/aigouzz
 * @Author: aig
 * @LastEditors: aig
 * @FilePath: /vue3-init-h5-1/src/plugins/axios.js
 */
import { App, getCurrentInstance } from "vue";

class EventBus {
  handles: any;
  app: any;
  eventMapUid: any;
  constructor(app: App) {
    this.handles = null;
    if (!this.handles) {
      Object.defineProperty(this, "handles", {
        value: {},
        enumerable: false,
      });
    }
    this.app = app;
    // _uid和EventName的映射
    this.eventMapUid = {};
  }
  setEventMapUid(uid: string, eventName: string) {
    if (!this.eventMapUid[uid]) {
      this.eventMapUid[uid] = [];
    }
    this.eventMapUid[uid].push(eventName);
    // 把每个_uid订阅的事件名字push到各自uid所属的数组里
  }
  $on(eventName: string, callback: any, vm: any) {
    // vm是在组件内部使用时组件当前的this用于取_uid
    if (!this.handles[eventName]) {
      this.handles[eventName] = [];
    }
    this.handles[eventName].push(callback);
    this.setEventMapUid(vm._uid, eventName);
  }
  $emit(...args: any[]) {
    const eventName = args[0];
    const params = args.slice(1);
    if (this.handles[eventName]) {
      const len = this.handles[eventName].length;
      for (let i = 0; i < len; i++) {
        this.handles[eventName][i](...params);
      }
    }
  }
  $offVmEvent(uid: number) {
    const currentEvents = this.eventMapUid[uid] || [];
    currentEvents.forEach((event: any) => {
      this.$off(event);
    });
  }
  $off(eventName: string) {
    delete this.handles[eventName];
  }
}

const $EventBus = {
  install: (app: any) => {
    return;
  },
};
$EventBus.install = (app: any) => {
  app.config.globalProperties.$eventBus = new EventBus(app);
  app.mixin({
    beforeUnmount() {
      const currentInstance = getCurrentInstance();
      // 拦截beforeUnmount钩子,自动销毁自身所有订阅的事件
      this.$eventBus.$offVmEvent(currentInstance?.uid);
    },
  });
};
export default $EventBus;
