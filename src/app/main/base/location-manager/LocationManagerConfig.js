import { lazy } from 'react'

const AgesScreen = lazy(() => import('./ages/AgesScreen'))
const AgeDetail = lazy(() => import('./element/Element'))

const LocationManagerConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'location-manager',
      children: [
        {
          path: '',
          element: <AgesScreen />,
        },
        {
          path: ':productId',
          element: <AgeDetail />,
        },
      ],
    },
  ],
}

export default LocationManagerConfig
