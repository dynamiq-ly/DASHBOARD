import { lazy } from 'react'

const Housekeeping = lazy(() => import('./HousekeepingScreen'))
const Cleaning = lazy(() => import('./RoomCleaning/RoomCleaning'))

const HousekeepingConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/housekeeping',
      children: [
        {
          path: '',
          element: <Housekeeping />,
        },
        {
          path: ':productId',
          element: <Cleaning />,
        },
      ],
    },
  ],
}

export default HousekeepingConfig
