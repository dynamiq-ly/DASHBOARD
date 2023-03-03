import { lazy } from 'react'

const Television = lazy(() => import('./TelevisionScreen'))
const RoomTv = lazy(() => import('./tv/Tv'))

const TelevisionConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/television',
      children: [
        {
          path: '',
          element: <Television />,
        },
        {
          path: ':productId',
          element: <RoomTv />,
        },
      ],
    },
  ],
}

export default TelevisionConfig
