import { lazy } from 'react'
const Housekeeping = lazy(() => import('./HousekeepingScreen'))
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
      ],
    },
  ],
}

export default HousekeepingConfig
