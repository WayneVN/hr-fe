import { computed } from "vue"
import { mapStores, storeToRefs } from 'pinia'
import numeral from 'numeral';
import { useFiltertore } from '@/store/index'
import { Checkbox } from './checkbox'
import Slider from '@/components/slider.vue'
import './styles/modal.scss'

export const Modal = {
  name: 'modal-component',
  data() {
    return {
      value: 1
    }
  },
  props: [],
  methods: {
    clear() {
      this.filterStore.clear()
    },
    apply() {
      this.filterStore.trigger()
      alert('success')
    }
  },

  setup() {
    const store = useFiltertore()
    const { form } = storeToRefs(store)
    return {
      filterStore: store,
      form,
    }
  },

  render() {
    return (
      <div class="modal-warp">
        <div class="mask" onClick={this.filterStore.trigger}></div>
        <div class="modal-panel">
          <div class="panel-head">
            <h1>Filter</h1>
          </div>
          <div class="panel-body">
            <div class="row">
              <h1>Price range</h1>
              <span class="row-subtitle">
                ${
                  numeral((this.form.priceRange[0] ?? 0) * 1000).format('0,0')
                } - ${
                  numeral((this.form.priceRange[1] ?? 0) * 1000).format('0,0')
                }
              </span>
              <Slider />
            </div>
            <div class="row">
              <h1>Description Contains Keywords</h1>
              <input
                class="row-input"
                type="text"
                value=""
                placeholder="Waterfront, Pool, Fireplace..."
              />
            </div>
            <div class="row">
              <h1>Bedrooms</h1>
              <Checkbox
                type="multi"
                name="Bedrooms"
                list={['0', '1', '2', '3', '4', '5+']} />
            </div>
            <div class="row">
              <h1>Bathroom</h1>
              <Checkbox
                name="Bathroom"
                list={['1+', '2+', '3+', '4+', '5+']}
              />
            </div>
            <div class="row">
              <h1>Garage/Parking</h1>
              <Checkbox
                list={['1+', '2+', '3+', '4+', '5+']}
                name="Garage"
              />
            </div>

          </div>
          <div class="panel-foot">
            <div class="btn" onClick={this.clear}>
              Clear
            </div>
            <div class="btn" onClick={this.apply}>
              Apply
            </div>
          </div>
        </div>
      </div>
    )
  }
}
