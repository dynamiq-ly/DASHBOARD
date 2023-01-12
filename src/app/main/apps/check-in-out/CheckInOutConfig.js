import { lazy } from 'react'
const CheckInOut = lazy(() => import('./CheckInOutScreen'))

const CheckInOutConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/check-in-out',
      element: <CheckInOut />,
    },
  ],
}

export default CheckInOutConfig
