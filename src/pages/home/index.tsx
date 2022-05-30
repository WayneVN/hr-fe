import { defineComponent } from 'vue'
import { mapState } from 'pinia'
import { useFiltertore } from '@/store/index'
import { Search, SearchTool, Map, Modal } from '@/components'



export default defineComponent({
  name: 'home-page',
  computed: {
    ...mapState(useFiltertore, ['isVisible']),
  },
  render() {
    return (
      <>
        <Search />
        <SearchTool />
        <Map />
        {
          this.isVisible ? <Modal /> : null
        }
      </>
    )
  }
})
