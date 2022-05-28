import { defineStore } from 'pinia'

export const mainStore = defineStore('main', {
  state: () => {
    return {
      msg: 'hello'
    }
  },

  getters: {},
  actions: {}
})
