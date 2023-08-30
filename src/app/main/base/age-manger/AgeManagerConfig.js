import { lazy } from 'react'

const AgesScreen = lazy(() => import('./ages/AgesScreen'))
const AgeDetail = lazy(() => import('./element/Element'))

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
        {
          path: ':productId',
          element: <AgeDetail />,
        },
      ],
    },
  ],
}

export default AgeManagerConfig
