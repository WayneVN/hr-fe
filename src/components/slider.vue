<template>
  <Slider
    v-model="form.priceRange"
    @change="handleChange"
  />
</template>

<script>
 import Slider from '@vueform/slider'
 import { mapState, mapStores, storeToRefs } from 'pinia'
 import { useFiltertore } from '@/store/index'
 import { computed } from "vue"


 export default {
   components: { Slider },
   setup() {
     const store = useFiltertore()
     const { form } = storeToRefs(store)
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
