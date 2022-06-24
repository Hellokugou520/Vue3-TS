import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      count: 0,
      name: "Bpoi",
      age: 18,
      nums: [1, 2, 3, 4, 5],
    };
  },
  getters: {
    sum(state: any) {
      return state.nums.reduce(
        (previousValue: any, currentValue: any) => previousValue + currentValue,
        0
      );
    },
    product(state: any) {
      return state.nums.reduce(
        (previousValue: any, currentValue: any) => previousValue * currentValue
      );
    },
  },
  mutations: {
    increase(state: any) {
      state.count++;
      state.nums[0]++;
    },
    decrease(state: any) {
      state.count--;
      state.nums[0]--;
    },
  },
  actions: {
    asyncDecrease({ commit }) {
      setTimeout(() => {
        commit("increase");
      }, 1000);
    },
  },
  modules: {},
});
