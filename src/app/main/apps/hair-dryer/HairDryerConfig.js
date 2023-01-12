import { lazy } from 'react'

const HairDryer = lazy(() => import('./HairDryerScreen'))

const HairDryerConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/hair-dryer',
      element: <HairDryer />,
    },
  ],
}

export default HairDryerConfig
