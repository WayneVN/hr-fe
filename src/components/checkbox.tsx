import { computed } from "vue"
import { mapStores, mapState, storeToRefs } from 'pinia'
import { useFiltertore } from '@/store/index'
import './styles/checkbox.scss'

export const Checkbox = {
  name: 'checkbox-component',
  props: ['list', 'type', 'name'],
  computed: {
    //...mapStores(useFiltertore),
  },
  setup() {
    const store = useFiltertore()
    const { form } = storeToRefs(store)
    return {
      store,
      form,
    }
  },

  methods: {
    handleClickItem(item) {
      this.store.updateItem(item, this.name, this.type)
    },
    reset() {
      this.store.setField(this.name, [])
    }
  },

  render() {
    const obj = this.form?.[this.name];

    return (
      <div class="checkbox-warp">
        <div onClick={this.reset} class={!obj.length ? 'item-active' : 'item'}>
          any
        </div>
        {this.list.map((i: string) => (
          <div
            class={obj.includes(i) ? 'item-active' : 'item'}
            onClick={(e) => this.handleClickItem(i)}
          >
            {i}
          </div>
        ))}
      </div>
    )
  }
}
