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
      element: <TourOperator />,
    },
  ],
}

export default TourOperatorConfig
