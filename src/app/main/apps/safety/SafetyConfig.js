import { lazy } from 'react'

const Safety = lazy(() => import('./SafetyScreen'))
const SafetyAdd = lazy(() => import('./add/AddSafety'))

const SafetyConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'safety',
      children: [
        {
          path: '',
          element: <Safety />,
        },
        {
          path: ':productId',
          element: <SafetyAdd />,
        },
      ],
    },
  ],
}

export default SafetyConfig
