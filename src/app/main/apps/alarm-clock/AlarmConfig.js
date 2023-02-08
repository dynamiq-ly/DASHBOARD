import { lazy } from 'react'

const AlarmClock = lazy(() => import('./AlarmScreen'))
const AlarmEdit = lazy(() => import('./edit/Alarms'))

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
          element: <AlarmEdit />,
        },
      ],
    },
  ],
}

export default AlarmConfig
