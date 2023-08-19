import { lazy } from 'react'

const Bars = lazy(() => import('./bars/BarScreen'))
const BarsDetail = lazy(() => import('./bar/Element'))
const BarStaffDetail = lazy(() => import('./staff/Element'))

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
            {
              path: 'staff/:staffId',
              element: <BarStaffDetail />,
            },
          ],
        },
      ],
    },
  ],
}

export default BarConfig
