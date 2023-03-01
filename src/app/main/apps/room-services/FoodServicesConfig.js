import { lazy } from 'react'

const FoodServices = lazy(() => import('./foods/FoodServicesScreen'))
const FoodServiceAE = lazy(() => import('./foods/edit/Element'))

const DrinksServices = lazy(() => import('./drinks/RoomDrinksScreen'))

const MiniBar = lazy(() => import('./mini-bar/MiniBarScreen'))
const MiniBarBar = lazy(() => import('./mini-bar/bar/Bar'))

const FoodServicesConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'rooms-services/food',
      children: [
        {
          path: '',
          element: <FoodServices />,
        },
        {
          path: ':productId',
          element: <FoodServiceAE />,
        },
      ],
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
      children: [
        {
          path: '',
          element: <MiniBar />,
        },
        {
          path: ':productId',
          element: <MiniBarBar />,
        },
      ],
    },
  ],
}

export default FoodServicesConfig
