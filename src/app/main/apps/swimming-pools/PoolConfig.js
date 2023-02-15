import { lazy } from 'react'

const Pools = lazy(() => import('./PoolScreen'))

const PoolCategories = lazy(() => import('./categories/CategoriesScreen'))
const PoolCategory = lazy(() => import('./categories/category/PoolCategory'))

const PoolConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pools/category',
      children: [
        {
          path: '',
          element: <PoolCategories />,
        },
        {
          path: ':productId',
          element: <PoolCategory />,
        },
      ],
    },
    {
      path: 'pools/list',
      element: <Pools />,
    },
  ],
}

export default PoolConfig
