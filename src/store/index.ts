import { defineStore } from 'pinia'

export type InitState = {
  isVisible: boolean;
  form: {
    priceRange: number[];
    Bedrooms: string[];
    Bathroom: string[];
    Garage: string[];
  }
}

const CACHE = 'cache';

const initState: InitState = {
  isVisible: !false,
  form: {
    priceRange: [10, 40],
    Bedrooms: [],
    Bathroom: [],
    Garage: [],
  }
}

export const useFiltertore = defineStore('filter', {
  state: () => {
    return {
      ...initState,
      form: {
        ...(initState.form),
        ...(JSON.parse(localStorage.getItem(CACHE) ?? '{}'))
      }
    }
  },

  getters: {},
  actions: {
    trigger() {
      this.isVisible = !this.isVisible
    },

    setField(key: string, val: any) {
      this.form[key] = val
      localStorage.setItem(CACHE, JSON.stringify(this.form))
    },

    updateItem(item: string[], name: string, type: string) {
      const obj = this.form?.[name];

      const has = obj.indexOf(item)
      if (type === 'multi') {
        if (has === -1) {
          this.form[name].push(item)
        } else {
          this.form[name] = this.form[name].filter((i) => i !== item)
        }
      } else {
        this.form[name] = [item]
      }
      localStorage.setItem(CACHE, JSON.stringify(this.form))

    },

    clear() {
      console.log('debug: xxxxxxx')
      this.$reset()
      localStorage.removeItem(CACHE)
      this.isVisible = true
      console.log('debug: thisthisthis', this.form)
    }
  }
})
