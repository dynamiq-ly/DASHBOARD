import { lazy } from 'react'

const Restaurants = lazy(() => import('./restaurants/RestaurantsScreen'))
const RestaurantDetail = lazy(() => import('./resto/Element'))

const RestaurantRegulation = lazy(() => import('./regulations/RegulationsScreen'))
const RestaurantRegulationDetail = lazy(() => import('./reglo/Element'))

const RestaurantServings = lazy(() => import('./servings/ServingsScreen'))
const RestaurantServingDetail = lazy(() => import('./serve/Element'))

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
            {
              path: 'servings',
              children: [
                {
                  path: '',
                  element: <RestaurantServings />,
                },
                {
                  path: ':servingId',
                  element: <RestaurantServingDetail />,
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
