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
      element: <AlarmClock />,
    },
  ],
}

export default AlarmConfig
