import { lazy } from 'react'

const BanksAndAtms = lazy(() => import('./BanksAtmsScreen'))
const Banks = lazy(() => import('./banks/Banks'))

const BanksAtmsConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/banks-atms',
      children: [
        {
          path: '',
          element: <BanksAndAtms />,
        },
        {
          path: ':productId',
          element: <Banks />,
        },
      ],
    },
  ],
}

export default BanksAtmsConfig
