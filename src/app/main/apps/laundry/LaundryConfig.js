import { lazy } from 'react'
const Laundry = lazy(() => import('./LaundryScreen'))

const LaundryConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/laundry',
      element: <Laundry />,
    },
  ],
}

export default LaundryConfig
