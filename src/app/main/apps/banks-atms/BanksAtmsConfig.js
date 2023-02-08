import { lazy } from 'react'

const BanksAndAtms = lazy(() => import('./BanksAtmsScreen'))

const BanksAtmsConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/banks-atms',
      element: <BanksAndAtms />,
    },
  ],
}

export default BanksAtmsConfig
