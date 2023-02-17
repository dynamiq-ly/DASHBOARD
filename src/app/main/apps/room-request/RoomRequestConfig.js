import { lazy } from 'react'

const RoomRequest = lazy(() => import('./RoomRequestScreen'))
const RequestRoomEdit = lazy(() => import('./request/Request'))

const RoomRequestConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/room-request',
      children: [
        {
          path: '',
          element: <RoomRequest />,
        },
        {
          path: ':productId',
          element: <RequestRoomEdit />,
        },
      ],
    },
  ],
}

export default RoomRequestConfig
