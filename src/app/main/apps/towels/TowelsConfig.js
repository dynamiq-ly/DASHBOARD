import { lazy } from 'react'

const Towels = lazy(() => import('./TowelsScreen'))
const RoomTowels = lazy(() => import('./room-towels/RoomTowels'))

const TowelsConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/towels',
      children: [
        {
          path: '',
          element: <Towels />,
        },
        {
          path: ':productId',
          element: <RoomTowels />,
        },
      ],
    },
  ],
}

export default TowelsConfig
