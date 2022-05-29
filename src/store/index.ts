import { defineStore } from 'pinia'

export const useFiltertore = defineStore('filter', {
  state: () => {
    return {
      isVisible: !false
    }
  },

  getters: {},
  actions: {
    trigger() {
      this.isVisible = !this.isVisible
    }
  }
})
