import { lazy } from 'react'
const CheckInOut = lazy(() => import('./CheckInOutScreen'))
const CheckOut = lazy(() => import('./check-out/CheckOutScreen'))
const PreOnlineCheckIn = lazy(() =>
  import('./pre-online-check-in/PreCheckInScreen')
)
const ExpressCheckOut = lazy(() =>
  import('./express-check-out/ExpressCheckOutScreen')
)
const LateCheckOut = lazy(() => import('./late-check-out/LateCheckOutScreen'))
const HotelReciept = lazy(() => import('./hotel-reciept/HotelRecieptScreen'))
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
    {
      path: '/check-in-out/express-check-out',
      element: <ExpressCheckOut />,
    },
    {
      path: '/check-in-out/late-check-out',
      element: <LateCheckOut />,
    },
    {
      path: '/check-in-out/hotel-reciept',
      element: <HotelReciept />,
    },
  ],
}

export default CheckInOutConfig
