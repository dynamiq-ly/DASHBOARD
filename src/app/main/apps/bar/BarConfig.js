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
      path: 'bar',
      children: [
        { path: '', element: <Bar /> },
        {
          path: ':productId',
          children: [
            { path: '', element: <BarItem /> },
            { path: 'menu/category', element: <BarMenuCategory /> },
            { path: 'menu/list', element: <BarMenu /> },
          ],
        },
      ],
    },
  ],
}

export default BarConfig
