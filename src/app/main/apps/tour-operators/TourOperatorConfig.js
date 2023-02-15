import { lazy } from 'react'

const TourOperator = lazy(() => import('./TourOperatorScreen'))

const TourOperatorConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/tour-operators',
      children: [
        {
          path: '',
          element: <TourOperator />,
        },
        {
          path: ':productId',
        },
      ],
    },
  ],
}

export default TourOperatorConfig
