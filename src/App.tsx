import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
/* import { mainStore } from '@/store/index' */
import 'normalize.css'
import './app.scss'

export default defineComponent({
  setup() {
    return () => (
      <div class="main-page">
        <RouterView />
      </div>
    )
  }
})
