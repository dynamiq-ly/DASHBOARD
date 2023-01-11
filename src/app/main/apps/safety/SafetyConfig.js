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
      element: <Safety />,
    },
    {
      path: 'safety/:productId',
      element: <SafetyAdd />,
    },
  ],
}

export default SafetyConfig
