import { defineComponent } from 'vue'
import { mapState, mapStores } from 'pinia'
import { useFiltertore } from '@/store/index'
import { Search, SearchTool, Map, Modal } from '@/components'

export default defineComponent({
  name: 'HomePage',
  computed: {
    ...mapStores(useFiltertore),
    ...mapState(useFiltertore, ['isVisible'])
  },
  render() {
    return (
      <>
        <Search />
        <SearchTool />
        <Map />
        <Slider></Slider>
        {this.isVisible ? <Modal /> : null}
      </>
    )
  }
})
