import { reactive } from 'vue'
import './styles/checkbox.scss'

export const Checkbox = {
  name: 'checkbox-component',
  props: ['list', 'type'],
  methods: {
    handleClickItem(item) {
      const has = this.counts.indexOf(item)
      if (this.type === 'multi') {
        if (has === -1) {
          this.counts.push(item)
        } else {
          this.counts = this.counts.filter((i) => i !== item)
        }
      } else {
        this.counts = [item]
      }
    },
    reset(item) {
      this.counts = []
    }
  },
  data() {
    return { counts: [] }
  },
  setup() {},
  render() {
    return (
      <div class="checkbox-warp">
        <div onClick={this.reset} class={!this.counts.length ? 'item-active' : 'item'}>
          any
        </div>
        {this.list.map((i: string) => (
          <div
            class={this.counts.includes(i) ? 'item-active' : 'item'}
            onClick={(e) => this.handleClickItem(i)}
          >
            {i}
          </div>
        ))}
      </div>
    )
  }
}
