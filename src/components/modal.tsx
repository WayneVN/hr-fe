import { mapState, mapStores } from 'pinia'
import { useFiltertore } from '@/store/index'
import { Checkbox } from './checkbox'
import Slider from '@/components/slider.vue'
import './styles/modal.scss'

export const Modal = {
  name: 'modal-component',
  /* components: {
   *   Slider
   * }, */
  data() {
    return {
      value: 1
    }
  },
  props: [],
  computed: {
    ...mapStores(useFiltertore),
    ...mapState(useFiltertore, ['isVisible'])
  },
  methods: {},
  setup() {},
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
              <span class="row-subtitle">$700,000 - $4,000,000</span>
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
              <Checkbox type="multi" list={['0', '1', '2', '3', '4', '5+']} />
            </div>
            <div class="row">
              <h1>Bathroom</h1>
              <Checkbox list={['1+', '2+', '3+', '4+', '5+']} />
            </div>
            <div class="row">
              <h1>Garage/Parking</h1>
              <Checkbox list={['1+', '2+', '3+', '4+', '5+']} />
            </div>
          </div>
          <div class="panel-foot">
            <div class="btn">Close</div>
            <div class="btn">Apply</div>
          </div>
        </div>
      </div>
    )
  }
}
