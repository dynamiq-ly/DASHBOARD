import { lazy } from 'react'

const PoolTowels = lazy(() => import('./PoolTowelsScreen'))

const PoolTowelsConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/pool-towels',
      element: <PoolTowels />,
    },
  ],
}

export default PoolTowelsConfig
