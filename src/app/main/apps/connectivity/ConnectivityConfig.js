import { lazy } from 'react'

const Connectivity = lazy(() => import('./ConnectivityScreen'))
const Connection = lazy(() => import('./cnx/Cnx'))

const ConnectivityConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/connectivity',
      children: [
        {
          path: '',
          element: <Connectivity />,
        },
        {
          path: ':productId',
          element: <Connection />,
        },
      ],
    },
  ],
}

export default ConnectivityConfig
