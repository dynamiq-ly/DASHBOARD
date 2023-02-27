import { lazy } from 'react'

const Interest = lazy(() => import('./InterestScreen'))
const InterestAE = lazy(() => import('./point/Point'))

const CategoryInterest = lazy(() => import('./category/CategoryScreen'))
const CategoryInterestAE = lazy(() => import('./category/type/Type'))

const InterestConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'interest/list',
      children: [
        {
          path: '',
          element: <Interest />,
        },
        {
          path: ':productId',
          element: <InterestAE />,
        },
      ],
    },
    {
      path: 'interest/category',
      children: [
        {
          path: '',
          element: <CategoryInterest />,
        },
        {
          path: ':productId',
          element: <CategoryInterestAE />,
        },
      ],
    },
  ],
}

export default InterestConfig
