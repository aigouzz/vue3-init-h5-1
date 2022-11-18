import { setStore } from "../../utils/util";
const state = {
  searchHistory: [],
  searchText: "",
};
const getters = {};
const mutations = {
  addHistory(state: any, searchHistory: any) {
    state.searchHistory.unshift(searchHistory);
  },
  setHistory(state: { searchHistory: any }, searchHistory: any) {
    state.searchHistory = searchHistory;
    setStore("searchHistory", searchHistory);
  },
};
const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
