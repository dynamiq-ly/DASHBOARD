import { lazy } from 'react'
const Transportation = lazy(() => import('./TransportationScreen'))

const TransportationConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/transportation',
      element: <Transportation />,
    },
  ],
}

export default TransportationConfig
