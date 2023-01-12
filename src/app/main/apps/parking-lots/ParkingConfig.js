import { lazy } from 'react'

const Praking = lazy(() => import('./ParkingScreen'))

const ParkingConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/parking-lots',
      element: <Praking />,
    },
  ],
}

export default ParkingConfig
