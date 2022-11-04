import axios from "./axios";

export function getHomeData() {
  return axios.get("http://test.happymmall.com/home/homeData");
}
