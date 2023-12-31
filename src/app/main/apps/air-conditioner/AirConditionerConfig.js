import { lazy } from 'react'

const AirConditioner = lazy(() => import('./AirConditionerScreen'))
const ClimatizationAE = lazy(() => import('./climatization/Climatization'))

const AirConditionerConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/air-conditioner',
      children: [
        {
          path: '',
          element: <AirConditioner />,
        },
        {
          path: ':productId',
          element: <ClimatizationAE />,
        },
      ],
    },
  ],
}

export default AirConditionerConfig
