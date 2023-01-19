import { lazy } from 'react'
const CheckInOut = lazy(() => import('./CheckInOutScreen'))
const CheckOut = lazy(() => import('./check-out/CheckOutScreen'))
const PreOnlineCheckIn = lazy(() =>
  import('./pre-online-check-in/PreCheckInScreen')
)
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
    {
      path: '/check-in-out/pre-online-check-in',
      element: <PreOnlineCheckIn />,
    },
  ],
}

export default CheckInOutConfig
