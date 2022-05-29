import './styles/search.scss'
import Ary from '@/assets/ary.png'
import Shape from '@/assets/shape.png'
import Close from '@/assets/close.png'
import Line from '@/assets/Line.png'

export const Search = {
  name: 'search-component',
  props: [],
  methods: {
    onClick() {}
  },
  render() {
    return (
      <div class="head-search">
        <div class="back">
          <img src={Ary} />
        </div>
        <div class="search-input">
          <img src={Shape} class="icon-search" />
          <input type="text" class="input" spellcheck="false" value="Ontario, ON" />
          <img src={Close} class="icon-close" />
        </div>
        <div class="watch-warp">
          <img src={Line} class="icon-line" />
          <span>Watch</span>
        </div>
      </div>
    )
  }
}
