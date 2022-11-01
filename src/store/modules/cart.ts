import { State } from "./cart.d";

const state = {
  items: [],
  name: "test",
  count: 0,
  // cartArray: JSON.parse(localStorage.getItem('cartArray')) || [],
  checkoutStatus: null,
};

// getters
const getters = {
  // goodsCount(state) {
  //   let count = 0
  //   state.cartArray.forEach(it => {
  //     count += it.count
  //   })
  //   return count
  // },
  cartProducts: (state: State, getters: any, rootState: State) => {
    return state.items.map(({ id, quantity }) => {
      const product = rootState.products.all.find(
        (product: any) => product.id === id
      );
      return {
        title: product.title,
        price: product.price,
        quantity,
      };
    });
  },

  cartTotalPrice: (state: State, getters: any) => {
    return getters.cartProducts.reduce((total: any, product: any) => {
      return total + product.price * product.quantity;
    }, 0);
  },
};

// actions
const actions = {
  checkout({ commit, state }: any, products: any) {
    const savedCartItems = [...state.items];
    commit("setCheckoutStatus", null);
    commit("setCartItems", {
      items: [],
    });
  },

  addProductToCart({ state, commit }: any, product: any) {
    commit("setCheckoutStatus", null);
    if (product.inventory > 0) {
      const cartItem = state.items.find((item: any) => item.id === product.id);
      if (!cartItem) {
        commit("pushProductToCart", {
          id: product.id,
        });
      } else {
        commit("incrementItemQuantity", cartItem);
      }
      // remove 1 item from stock
      commit(
        "products/decrementProductInventory",
        {
          id: product.id,
        },
        {
          root: true,
        }
      );
    }
  },
};

// mutations
const mutations = {
  addToCart(state: any) {
    state.count++;
  },
  pushProductToCart(state: State, { id }: any) {
    state.items.push({
      id,
      quantity: 1,
    });
  },

  incrementItemQuantity(state: State, { id }: any) {
    const cartItem = state.items.find((item) => item.id === id);
    cartItem.quantity++;
  },

  setCartItems(state: State, { items }: any) {
    state.items = items;
  },

  setCheckoutStatus(state: State, status: any) {
    state.checkoutStatus = status;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
