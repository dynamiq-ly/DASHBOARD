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
      children: [
        {
          path: '',
          element: <HairDryer />,
        },
      ],
    },
  ],
}

export default HairDryerConfig
