import { lazy } from 'react'

const Gym = lazy(() => import('./GymScreen'))

const GymConfig = {
  setting: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/gym',
      children: [
        {
          path: '',
          element: <Gym />,
        },
      ],
    },
  ],
}

export default GymConfig
