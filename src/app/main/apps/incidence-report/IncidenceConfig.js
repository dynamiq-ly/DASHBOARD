import { lazy } from 'react'

const Incidence = lazy(() => import('./IncidenceScreen'))
const Report = lazy(() => import('./incidence/Incidence'))

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
        {
          path: ':productId',
          element: <Report />,
        },
      ],
    },
  ],
}

export default IncidenceConfig
