import Down from '@/assets/icon-down.png'
import { mapState, mapStores } from 'pinia'
import { useFiltertore } from '@/store/index'
import './styles/searchTool.scss'

export const SearchTool = {
  name: 'search-tool-component',
  props: [],
  computed: {
    ...mapStores(useFiltertore),
    ...mapState(useFiltertore, ['isVisible'])
  },
  methods: {
    openModal() {}
  },
  render() {
    return (
      <div class="search-tool">
        <div class="dropdown-btn">
          All Property Types
          <img class="icon-down" src={Down} />
        </div>

        <div class="dropdown-btn">
          <div class="tag-group">
            <span class="tag1"></span>
            3d
          </div>
          <div class="tag-group">
            <span class="tag2"></span>
            3d
          </div>
          <img class="icon-down" src={Down} />
        </div>

        <div class="dropdown-btn" onClick={this.filterStore.trigger}>
          Filters
          <img class="icon-down" src={Down} />
        </div>
      </div>
    )
  }
}
