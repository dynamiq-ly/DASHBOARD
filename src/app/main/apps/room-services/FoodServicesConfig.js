import { lazy } from 'react'

const FoodServices = lazy(() => import('./FoodServicesScreen'))
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
      path: 'rooms-services/list',
      element: <FoodServices />,
    },
    {
      path: 'rooms-services/drinks',
      element: <DrinksServices />,
    },
    {
      path: 'rooms-services/mini-bar',
      element: <MiniBar />,
    },
  ],
}

export default FoodServicesConfig
