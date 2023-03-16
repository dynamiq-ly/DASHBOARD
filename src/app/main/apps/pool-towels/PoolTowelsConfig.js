import { lazy } from 'react'

const PoolTowels = lazy(() => import('./PoolTowelsScreen'))
const PoolTowel = lazy(() => import('./pool-towel/PoolTowel'))

const PoolTowelsConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pool-towels',
      children: [
        {
          path: '',
          element: <PoolTowels />,
        },
        {
          path: ':productId',
          element: <PoolTowel />,
        },
      ],
    },
  ],
}

export default PoolTowelsConfig
