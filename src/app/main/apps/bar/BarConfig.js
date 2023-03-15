import { lazy } from 'react'

const Bar = lazy(() => import('./BarScreen'))
const BarItem = lazy(() => import('./AE/Item'))

const BarMenu = lazy(() => import('./menu/MenuScreen'))
const BarMenuCategory = lazy(() => import('./category/CategoryScreen'))

const BarConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/bar/list',
      children: [
        { path: '', element: <Bar /> },
        { path: ':productId', element: <BarItem /> },
      ],
    },
    {
      path: 'bar/menu/list',
      element: <BarMenu />,
    },
    {
      path: 'bar/menu/category',
      element: <BarMenuCategory />,
    },
  ],
}

export default BarConfig
