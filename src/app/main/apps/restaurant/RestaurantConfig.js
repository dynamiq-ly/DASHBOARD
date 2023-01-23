import { lazy } from 'react'

const Restaurants = lazy(() => import('./RestaurantsScreen'))
const Restaurant = lazy(() => import('./resto/Restaurant'))

const RestaurantDrinkMenu = lazy(() => import('./menu/drink/DrinkScreen'))
const RestaurantFoodsMenu = lazy(() => import('./menu/food/FoodScreen'))
const RestaurantFoodCategoryMenu = lazy(() => import('./menu/food/category/FoodCategoryScreen'))
const RestaurantRegulation = lazy(() => import('./regulation/RegulationScreen'))

const RestaurantConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'restaurant/list',
      children: [
        {
          path: '',
          element: <Restaurants />,
        },
        {
          path: ':productId',
          element: <Restaurant />,
        },
      ],
    },
    { path: 'restaurant/menu/drinks', element: <RestaurantDrinkMenu /> },
    { path: 'restaurant/menu/food/list', element: <RestaurantFoodsMenu /> },
    {
      path: 'restaurant/menu/food/category',
      element: <RestaurantFoodCategoryMenu />,
    },
    { path: 'restaurant/regulation', element: <RestaurantRegulation /> },
  ],
}

export default RestaurantConfig
