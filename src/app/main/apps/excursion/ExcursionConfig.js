import { lazy } from 'react'

const Excursion = lazy(() => import('./ExcursionScreen'))

const ExcursionCategories = lazy(() => import('./category/CategoryScreen'))
const ExcursionCategory = lazy(() => import('./category/type/Type'))

const ExcursionConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'excursion/list',
      children: [
        {
          path: '',
          element: <Excursion />,
        },
      ],
    },
    {
      path: 'excursion/category',
      children: [
        {
          path: '',
          element: <ExcursionCategories />,
        },
        {
          path: ':productId',
          element: <ExcursionCategory />,
        },
      ],
    },
  ],
}

export default ExcursionConfig
