import { lazy } from 'react'

const AlarmClock = lazy(() => import('./AlarmScreen'))

const AlarmConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/alarm-clock',
      children: [
        {
          path: '',
          element: <AlarmClock />,
        },
        {
          path: ':productId',
        },
      ],
    },
  ],
}

export default AlarmConfig
