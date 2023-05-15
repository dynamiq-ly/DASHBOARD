import { lazy } from 'react'

const RoomUpgrade = lazy(() => import('./RoomUpgradeScreen'))

const Pensions = lazy(() => import('./pension/PensionsScreen'))
const PensionEdit = lazy(() => import('./pension/pen/Element'))

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
        {
          path: 'pensions',
          children: [
            {
              path: '',
              element: <Pensions />,
            },
            {
              path: ':productId',
              element: <PensionEdit />,
            },
          ],
        },
      ],
    },
  ],
}

export default RoomUpgradeConfig
