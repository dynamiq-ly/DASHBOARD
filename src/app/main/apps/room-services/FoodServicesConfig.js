import { lazy } from 'react'

const FoodServices = lazy(() => import('./FoodServicesScreen'))

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
  ],
}

export default FoodServicesConfig
