import { lazy } from 'react'
const OurHotel = lazy(() => import('./OurHotelScreen'))

const OurHotelConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/our-hotel',
      element: <OurHotel />,
    },
  ],
}

export default OurHotelConfig
