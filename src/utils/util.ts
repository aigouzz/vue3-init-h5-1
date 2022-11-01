import { App } from "vue";

export const registerPlugins = (plugins: Array<any>) => {
  return {
    install(app: App) {
      plugins.forEach((plugin) => {
        app.use(plugin);
      });
    },
  };
};

// 存储localStorage
export const setStore = (name: string, content: any) => {
  if (!name) return false;
  localStorage.setItem(name, JSON.stringify(content));
};

// 获取localStorage
export const getStore = (name: string) => {
  if (!name) return false;
  return JSON.parse(localStorage.getItem(name) as string);
};

export function removeSpace(value: string) {
  return value.replace(/\s+/g, "");
}

export function formValidate(val: string, type: string) {
  const phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
  const emailReg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
  if (val === "") {
    return false;
  } else {
    // 非空验证
    if (type === "require") {
      return !!removeSpace(val);
    }
    if (type === "phone") {
      return phoneReg.test(val);
    }
    if (type === "email") {
      return emailReg.test(val);
    }
  }
}

// 获取url参数
export function getUrlKey(name: string) {
  return decodeURIComponent((new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(location.href) || [, ""])[1].replace(/\+/g, "%20")) || null;
}

// 数组去重
export function dedupe(array: Array<any>) {
  return Array.from(new Set(array));
}

export const ModalHelper = ((bodyCls) => {
  let scrollTop: number;
  return {
    afterOpen: function () {
      scrollTop = document.documentElement.scrollTop;
      document.body.classList.add(bodyCls);
      document.body.style.top = -scrollTop + "px";
    },
    beforeClose: function () {
      document.body.classList.remove(bodyCls);
      // scrollTop lost after set position:fixed, restore it back.
      document.documentElement.scrollTop = scrollTop;
    },
  };
})("dialog-open");
