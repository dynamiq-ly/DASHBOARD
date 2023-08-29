import { lazy } from 'react'

const AgesScreen = lazy(() => import('./ages/AgesScreen'))

const AgeManagerConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'age-manager',
      children: [
        {
          path: '',
          element: <AgesScreen />,
        },
      ],
    },
  ],
}

export default AgeManagerConfig
