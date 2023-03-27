import { lazy } from 'react'

const Incidence = lazy(() => import('./IncidenceScreen'))

const IncidenceConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/incidence-report',
      children: [
        {
          path: '',
          element: <Incidence />,
        },
      ],
    },
  ],
}

export default IncidenceConfig
