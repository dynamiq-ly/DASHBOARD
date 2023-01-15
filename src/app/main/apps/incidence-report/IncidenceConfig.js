import { lazy } from 'react'
<<<<<<< Updated upstream
const Incidence = lazy(() => import('./IncidenceScreen'))
=======

const Incidence = lazy(() => import('./IncidenceScreen'))

>>>>>>> Stashed changes
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
