import axios from "./axios";

export function getHomeData() {
  return axios.get("http://test.happymmall.com/home/homeData");
}

export function getClassifyData() {
  return axios.get("http://test.happymmall.com/category/categoryData");
}
