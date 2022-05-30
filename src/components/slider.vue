<template>
  <Slider
    v-model="value"
    @change="handleChange"
  />
</template>

<script>
 import Slider from '@vueform/slider'
 import { mapState, mapStores } from 'pinia'
 import { useFiltertore } from '@/store/index'
 import { computed } from "vue"


 export default {
   components: { Slider },
   data() {
     console.log('debug: ', this.form.priceRange, '------------------')
     return {
       value: this.form.priceRange
     }
   },
   setup() {
    const store = useFiltertore()
    const form = computed(() => store.form)

    return {
      form,
      store
    }
   },
   computed: {
     ...mapStores(useFiltertore),
     ...mapState(useFiltertore, ['form']),
   },
   methods:  {
     handleChange(val) {
       this.filterStore.setField('priceRange', val)
     }
   }
 }
</script>
