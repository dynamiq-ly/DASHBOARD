import { lazy } from 'react'

const RoomUpgrade = lazy(() => import('./RoomUpgradeScreen'))

const RoomUpgradeConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/room-upgrade',
      children: [
        {
          path: '',
          element: <RoomUpgrade />,
        },
      ],
    },
  ],
}

export default RoomUpgradeConfig
