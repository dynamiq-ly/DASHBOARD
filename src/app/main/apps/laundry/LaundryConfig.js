import { lazy } from 'react'

const Laundry = lazy(() => import('./LaundryScreen'))

const Menu = lazy(() => import('./menu/MenuScreen'))
const LaundryMenu = lazy(() => import('./menu/menu-ae/Element'))

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
          children: [
            {
              path: '',
              element: <Menu />,
            },
            {
              path: ':productId',
              element: <LaundryMenu />,
            },
          ],
        },
      ],
    },
  ],
}

export default LaundryConfig
