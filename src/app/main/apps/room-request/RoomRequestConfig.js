import { lazy } from 'react'

const RoomRequest = lazy(() => import('./RoomRequestScreen'))

const RoomRequestConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/room-request',
      element: <RoomRequest />,
    },
  ],
}

export default RoomRequestConfig
