import { lazy } from 'react'

const Restaurant = lazy(() => import('./RestaurantScreen'))
const RestaurantDrinkMenu = lazy(() => import('./menu/drink/DrinkScreen'))
const RestaurantFoodsMenu = lazy(() => import('./menu/food/FoodScreen'))
const RestaurantFoodCategoryMenu = lazy(() =>
  import('./menu/food/category/FoodCategoryScreen')
)
const RestaurantRegulation = lazy(() => import('./regulation/RegulationHeader'))

const RestaurantConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    { path: 'restaurant/list', element: <Restaurant /> },
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
