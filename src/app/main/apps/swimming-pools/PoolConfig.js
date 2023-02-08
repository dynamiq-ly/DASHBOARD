import { lazy } from 'react'

const Pools = lazy(() => import('./PoolScreen'))
const PoolCategories = lazy(() => import('./categories/CategoriesScreen'))

const PoolConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pools/category',
      element: <PoolCategories />,
    },
    {
      path: 'pools/list',
      element: <Pools />,
    },
  ],
}

export default PoolConfig
