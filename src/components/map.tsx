/// <reference types="google.maps" />

import { reactive } from 'vue'
import { Loader } from '@googlemaps/js-api-loader'
import { mockData, KEY, MockItem } from '@/config'
import './styles/map.scss'
import Marker from './marker.svg'

const states = reactive<{
  google: typeof google
  map: typeof google.maps | null
  markers: any
}>({
  google: null as unknown as typeof google,
  map: null as unknown as typeof google.maps,
  markers: null
})

const initMap = async () => {
  const loader = new Loader({
    apiKey: KEY,
    version: 'weekly',
    language: 'en'
  })

  states.google = (await loader.load()) as typeof google

  states.map = new states.google.maps.Map(document.getElementById('map') as HTMLElement, {
    center: mockData[0].location,
    zoom: 12,
    panControl: false,
    rotateControl: false,
    zoomControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    fullscreenControl: false
  }) as typeof google.maps
}

const handleLoadMarkers = async () => {
  const size = 70

  mockData.forEach((i: MockItem) => {
    new states.google.maps.Marker({
      position: i.location,
      map: states.map,
      draggable: false,
      label: {
        fontSize: '14px',
        color: '#fff',
        fontWeight: '600',
        text: i.label
      },
      marker: i,
      icon: {
        url: Marker,
        size: new states.google.maps.Size(size, size),
        scaledSize: new states.google.maps.Size(size, size + 10)
      }
    })
  })
}

export const Map = {
  name: 'google-map-component',
  props: [],
  methods: {},
  setup() {},
  mounted: async () => {
    await initMap()
    await handleLoadMarkers()
  },
  render() {
    return (
      <div class="map-warp">
        <div class="filter-option-warp">
          <div class="btn1">For Sale</div>
          <div class="btn2">Sold</div>
          <div class="btn3">De-listed</div>
        </div>
        <div id="map"></div>
      </div>
    )
  }
}
