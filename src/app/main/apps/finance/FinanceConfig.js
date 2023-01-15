import { lazy } from 'react'

const Finance = lazy(() => import('./FinanceScreen'))

const FinanceConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/finance',
      element: <Finance />,
    },
  ],
}

export default FinanceConfig
