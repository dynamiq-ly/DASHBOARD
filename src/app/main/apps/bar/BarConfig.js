import { lazy } from 'react'

const Bars = lazy(() => import('./bars/BarScreen'))
const BarsDetail = lazy(() => import('./bar/Element'))

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
        { path: '', element: <Bars /> },
        {
          path: ':productId',
          children: [
            {
              path: '',
              element: <BarsDetail />,
            },
          ],
        },
      ],
    },
  ],
}

export default BarConfig
