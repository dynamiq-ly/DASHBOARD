import { lazy } from 'react'

const Gym = lazy(() => import('./GymScreen'))
const GymDetail = lazy(() => import('./element/Element'))

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
        {
          path: ':productId',
          element: <GymDetail />,
        },
      ],
    },
  ],
}

export default GymConfig
