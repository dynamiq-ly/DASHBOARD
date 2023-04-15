import { lazy } from 'react'

const Restaurants = lazy(() => import('./restaurants/RestaurantsScreen'))

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
      ],
    },
  ],
}

export default RestaurantConfig
