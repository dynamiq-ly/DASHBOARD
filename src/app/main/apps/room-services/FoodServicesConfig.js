import { lazy } from 'react'

const FoodServices = lazy(() => import('./FoodServicesScreen'))
const DrinksServices = lazy(() => import('./drinks/RoomDrinksScreen'))
const FoodServicesConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'rooms-services/list',
      element: <FoodServices />,
    },
    {
      path: 'rooms-services/drinks',
      element: <DrinksServices />,
    },
  ],
}

export default FoodServicesConfig
