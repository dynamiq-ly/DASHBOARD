import { lazy } from 'react'

const AirConditioner = lazy(() => import('./AirConditionerScreen'))

const AirConditionerConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/air-conditioner',
      element: <AirConditioner />,
    },
  ],
}

export default AirConditionerConfig
