import { lazy } from 'react'

const Restaurants = lazy(() => import('./RestaurantsScreen'))
const Restaurant = lazy(() => import('./resto/Restaurant'))

const RestaurantDrinkMenu = lazy(() => import('./menu/drink/DrinkScreen'))
const RestaurantFoodsMenu = lazy(() => import('./menu/food/FoodScreen'))
const RestaurantFoodCategoryMenu = lazy(() => import('./menu/food/category/FoodCategoryScreen'))

const RestaurantRegulation = lazy(() => import('./regulations/RegulationScreen'))
const RestaurantRegulationEdit = lazy(() => import('./regulations/regulation/Element'))

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
            { path: '', element: <Restaurant /> },
            {
              path: 'regulation',
              children: [
                { path: '', element: <RestaurantRegulation /> },
                { path: ':regulationId', element: <RestaurantRegulationEdit /> },
              ],
            },
            { path: 'menu/drinks', element: <RestaurantDrinkMenu /> },
            {
              path: 'menu/food',
              children: [
                { path: 'list', element: <RestaurantFoodsMenu /> },
                { path: 'categorgy', element: <RestaurantFoodCategoryMenu /> },
              ],
            },
          ],
        },
      ],
    },
  ],
}

export default RestaurantConfig
