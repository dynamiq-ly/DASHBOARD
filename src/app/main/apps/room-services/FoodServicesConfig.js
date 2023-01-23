import { lazy } from 'react'

const FoodServices = lazy(() => import('./foods/FoodServicesScreen'))

const DrinksServices = lazy(() => import('./drinks/RoomDrinksScreen'))

const MiniBar = lazy(() => import('./mini-bar/MiniBarScreen'))

const FoodServicesConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'rooms-services/food',
      element: <FoodServices />,
    },
    {
      path: 'rooms-services/drinks',
      children: [
        {
          path: '',
          element: <DrinksServices />,
        },
        {
          path: 'productId',
          element: <></>,
        },
      ],
    },
    {
      path: 'rooms-services/mini-bar',
      element: <MiniBar />,
    },
  ],
}

export default FoodServicesConfig
