import { createStore, Store, useStore as useVuexStore } from 'vuex'

import { IRootState, IStoreType } from './types'

import login from './login/login'

const store = createStore<IRootState>({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

// 为了给外部的store提供类型，进行特殊处理
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
