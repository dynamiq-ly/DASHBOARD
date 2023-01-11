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
      element: <RoomUpgrade />,
    },
  ],
}

export default RoomUpgradeConfig
