import { lazy } from 'react'

const Excursion = lazy(() => import('./ExcursionScreen'))
const ExcursionCategory = lazy(() => import('./category/CategoryScreen'))

const ExcursionConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    { path: 'excursion/list', element: <Excursion /> },
    { path: 'excursion/category', element: <ExcursionCategory /> },
  ],
}

export default ExcursionConfig
