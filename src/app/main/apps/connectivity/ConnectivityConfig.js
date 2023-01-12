import { lazy } from 'react'

const Connectivity = lazy(() => import('./ConnectivityScreen'))

const ConnectivityConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/connectivity',
      element: <Connectivity />,
    },
  ],
}

export default ConnectivityConfig
