import { lazy } from 'react'

const Safety = lazy(() => import('./SafetyScreen'))

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
  ],
}

export default SafetyConfig
