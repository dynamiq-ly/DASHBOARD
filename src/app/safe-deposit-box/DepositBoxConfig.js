import { lazy } from 'react'

const SafeDeposit = lazy(() => import('./DepositBoxScreen'))

import React from 'react'

const DepositBoxConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/safe-deposit-box',
      element: <SafeDeposit />,
    },
  ],
}

export default DepositBoxConfig
