import { lazy } from 'react'

const Interest = lazy(() => import('./InterestScreen'))
const CategoryInterest = lazy(() => import('./category/CategoryScreen'))

const InterestConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'interest/list',
      element: <Interest />,
    },
    {
      path: 'interest/category',
      element: <CategoryInterest />,
    },
  ],
}

export default InterestConfig
