import { lazy } from 'react'

const ExcursionScreen = lazy(() => import('./ExcursionScreen'))

const ExcursionConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [{ path: 'excursion/list', element: <ExcursionScreen /> }],
}

export default ExcursionConfig
