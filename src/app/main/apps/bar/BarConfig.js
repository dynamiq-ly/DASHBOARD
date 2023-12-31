import { lazy } from 'react'

const Bars = lazy(() => import('./bars/BarScreen'))
const BarsDetail = lazy(() => import('./bar/Element'))
const BarStaffDetail = lazy(() => import('./staff/Element'))
const BarMenuDetail = lazy(() => import('./menu/Element'))
const BarMenuSoftDrinks = lazy(() => import('./soft-drinks/Element'))
const BarMenuAlcoholDrinks = lazy(() => import('./alcohol-drink/Element'))
const BarMenuAlcoholDrinksFeatures = lazy(() => import('./feautres/Element'))

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
            {
              path: 'menu/:menuId',
              children: [
                {
                  path: '',
                  element: <BarMenuDetail />,
                },
                {
                  path: 'soft/:softId',
                  element: <BarMenuSoftDrinks />,
                },
                {
                  path: 'alcohol/:alcoholId',
                  children: [
                    { path: '', element: <BarMenuAlcoholDrinks /> },
                    { path: 'features/:featuresId', element: <BarMenuAlcoholDrinksFeatures /> },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

export default BarConfig
