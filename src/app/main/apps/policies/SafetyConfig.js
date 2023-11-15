import { lazy } from 'react'

const Safety = lazy(() => import('./SafetyScreen'))
const Protocol = lazy(() => import('./protocol/Protocol'))

const SafetyConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'policies',
      children: [
        {
          path: '',
          element: <Safety />,
        },
        {
          path: ':productId',
          element: <Protocol />,
        },
      ],
    },
  ],
}

export default SafetyConfig
