import { lazy } from 'react'

const Restaurants = lazy(() => import('./restaurants/RestaurantsScreen'))
const RestaurantDetail = lazy(() => import('./resto/Element'))

const RestaurantRegulation = lazy(() => import('./regulations/RegulationsScreen'))
const RestaurantRegulationDetail = lazy(() => import('./reglo/Element'))

const RestaurantConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'restaurant',
      children: [
        {
          path: '',
          element: <Restaurants />,
        },
        {
          path: ':productId',
          children: [
            {
              path: '',
              element: <RestaurantDetail />,
            },
            {
              path: 'regulations',
              children: [
                {
                  path: '',
                  element: <RestaurantRegulation />,
                },
                {
                  path: ':regulationId',
                  element: <RestaurantRegulationDetail />,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

export default RestaurantConfig
