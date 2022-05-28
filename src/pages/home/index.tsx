import { defineComponent } from 'vue'
import { mainStore } from '@/store/index'

export default defineComponent({
  name: 'Home',
  setup() {
    /* const s = mainStore()
     * console.log(s.msg) */
    return () => <div>home</div>
  }
})
