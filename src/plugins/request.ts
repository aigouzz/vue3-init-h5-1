import axios from "./axios";

export function getHomeData() {
  return axios.get("http://test.happymmall.com/home/homeData");
}

export function getClassifyData() {
  return axios.get("http://test.happymmall.com/category/categoryData");
}

export function getRecommendListData(value: number) {
  return axios.get(`/api/goods/list?page=${value}&size=15`);
}

export function getRecommendData() {
  return axios.get("http://test.happymmall.com/home/recommend");
}
