/// <reference types="google.maps" />

export type MockItem = {
  id: string
  up_date: string
  price: string
  label: string
  house_prop: {
    bedroom: number
    bathroom?: number
    sqft: number
  }
  address: string
  location: google.maps.LatLngLiteral | google.maps.LatLng
  photo: string
  status: string
}

export const mockData: Array<MockItem> = [
  {
    id: '6zqW7dGN9Npy5eZE',
    up_date: '2021-12-22',
    price: '599000',
    label: 'M 599K',
    house_prop: {
      bedroom: 1,
      bathroom: 0,
      sqft: 111
    },
    address: '4 - 1182 7TH AVENUE W',
    location: { lat: 49.2238816, lng: -122.9110533 },
    photo: 'https://cache-w11.housesigma.com/file/pix-rebgv/262658608/acac0_1.jpg?1dcd5682',
    status: 'sale'
  },
  {
    id: 'bqB176WevD63ZajD',
    up_date: '2021-12-08',
    price: '90955',
    label: 'A 91K',
    house_prop: {
      bedroom: 1,
      bathroom: 2,
      sqft: 134
    },
    address: '102 - 825 15TH AVENUE W',
    location: { lat: 49.2036649, lng: -122.9084825 },
    photo: 'https://cache-w11.housesigma.com/file/pix-rebgv/262659760/72ae7_1.jpg?f6104fbe',
    status: 'sale'
  },
  {
    id: 'jAXw7QwVR8bYQOzg',
    up_date: '2022-01-01',
    price: '22800',
    label: 'M 22K',
    house_prop: {
      bedroom: 3,
      sqft: 111
    },
    address: '606 - 587 7TH AVENUE W',
    location: { lat: 49.2079917, lng: -122.9140894 },
    photo: 'https://cache-w13.housesigma.com/file/pix-rebgv/262658326/0f67c_1.jpg?51838036',
    status: 'sold'
  },
  {
    id: 'bEDRYagAB1P71VaB',
    up_date: '2021-12-16',
    price: '87000',
    label: 'M 87K',
    house_prop: {
      bedroom: 3,
      bathroom: 2,
      sqft: 140
    },
    address: '207 - 688 12TH AVENUE W',
    location: { lat: 49.2080851, lng: -122.9218253 },
    photo: 'https://cache-w11.housesigma.com/file/pix-rebgv/262659228/302ab_1.jpg?4aae8dce',
    status: 'sale'
  }
]

export const KEY = 'AIzaSyA1Krb9T9-F1KMysusQqc3b_Hk6YRL-0YU'
