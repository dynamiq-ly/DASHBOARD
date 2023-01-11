import { lazy } from 'react'

const Statistics = lazy(() => import('./StatisticScreen'))

const StatisticsConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/',
      element: <Statistics />,
    },
  ],
}

export default StatisticsConfig
