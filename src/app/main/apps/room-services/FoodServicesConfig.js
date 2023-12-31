import { lazy } from 'react'

const FoodServices = lazy(() => import('./foods/FoodServicesScreen'))
const FoodServiceAE = lazy(() => import('./foods/edit/Element'))

const FoodList = lazy(() => import('./foods/list/ListScreen'))
const FoodListPlate = lazy(() => import('./foods/list/edit/Element'))
const FoodListSupplements = lazy(() => import('./foods/supplements/SuppelementScreen'))
const FoodListSupplementsAE = lazy(() => import('./foods/supplements/edit/Element'))

const DrinksServices = lazy(() => import('./drinks/RoomDrinksScreen'))
const DrinkServiceCategory = lazy(() => import('./drinks/category/Category'))

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
          children: [
            {
              path: '',
              element: <FoodServiceAE />,
            },
            {
              path: 'plates',
              children: [
                {
                  path: '',
                  element: <FoodList />,
                },
                {
                  path: ':plateId',
                  children: [
                    {
                      path: '',
                      element: <FoodListPlate />,
                    },
                    {
                      path: 'supplements',
                      children: [
                        {
                          path: '',
                          element: <FoodListSupplements />,
                        },
                        {
                          path: ':supplementId',
                          element: <FoodListSupplementsAE />,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
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
          path: ':productId',
          children: [
            {
              path: '',
              element: <DrinkServiceCategory />,
            },
          ],
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
