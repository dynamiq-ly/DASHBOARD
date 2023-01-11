import { lazy } from 'react'
const Incidence = lazy(() => import('./IncidenceHeader'))
const IncidenceConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/incidence-report',
      element: <Incidence />,
    },
  ],
}

export default IncidenceConfig
