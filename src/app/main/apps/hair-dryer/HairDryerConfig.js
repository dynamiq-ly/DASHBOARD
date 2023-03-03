import { lazy } from 'react'

const HairDryer = lazy(() => import('./HairDryerScreen'))
const DryerAE = lazy(() => import('./dryer/Dryer'))

const HairDryerConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/hair-dryer',
      children: [
        {
          path: '',
          element: <HairDryer />,
        },
        {
          path: 'productId',
          element: <DryerAE />,
        },
      ],
    },
  ],
}

export default HairDryerConfig
