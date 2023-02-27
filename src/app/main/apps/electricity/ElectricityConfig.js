import { lazy } from 'react'

const Electricity = lazy(() => import('./ElectricityScreen'))

const ElectricityConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/electricity',
      element: <Electricity />,
    },
  ],
}

export default ElectricityConfig
