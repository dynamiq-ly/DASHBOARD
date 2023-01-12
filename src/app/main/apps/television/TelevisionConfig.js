import { lazy } from 'react'
const Television = lazy(() => import('./TelevisionScreen'))

const TelevisionConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/television',
      element: <Television />,
    },
  ],
}

export default TelevisionConfig
