import { lazy } from 'react'

const TourOperator = lazy(() => import('./TourOperatorScreen'))
const Agency = lazy(() => import('./agency/Agency'))

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
          element: <Agency />,
        },
      ],
    },
  ],
}

export default TourOperatorConfig
