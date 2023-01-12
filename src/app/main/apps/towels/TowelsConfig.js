import { lazy } from 'react'

const Towels = lazy(() => import('./TowelsScreen'))
const TowelsConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/towels',
      element: <Towels />,
    },
  ],
}

export default TowelsConfig
