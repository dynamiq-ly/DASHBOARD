import { lazy } from 'react'

const Electricity = lazy(() => import('./ElectricityScreen'))
const Cables = lazy(() => import('./electricityCables/Cables'))

const ElectricityConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/electricity',
      children: [
        {
          path: '',
          element: <Electricity />,
        },
        {
          path: ':productId',
          element: <Cables />,
        },
      ],
    },
  ],
}

export default ElectricityConfig
