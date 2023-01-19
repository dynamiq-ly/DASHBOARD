import { lazy } from 'react'
const CheckInOut = lazy(() => import('./CheckInOutScreen'))
const CheckOut = lazy(() => import('./check-out/CheckOutScreen'))
const CheckInOutConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/check-in-out/check-in',
      element: <CheckInOut />,
    },
    {
      path: '/check-in-out/check-out',
      element: <CheckOut />,
    },
  ],
}

export default CheckInOutConfig
