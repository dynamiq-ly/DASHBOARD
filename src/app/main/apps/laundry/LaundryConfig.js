import { lazy } from 'react'

const Laundry = lazy(() => import('./LaundryScreen'))
const Menu = lazy(() => import('./menu/MenuScreen'))

const LaundryConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'laundry',
      children: [
        {
          path: '',
          element: <Laundry />,
        },
        {
          path: 'menu',
          element: <Menu />,
        },
      ],
    },
  ],
}

export default LaundryConfig
