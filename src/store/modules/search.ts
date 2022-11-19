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
  setSearchText(state: any, payload: any) {
    state.searchText = payload;
  },
};
const actions = {
  getSearchText(context: any): Promise<unknown> {
    return new Promise((resolve, reject) => {
      context.commit("setSearchText");
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
