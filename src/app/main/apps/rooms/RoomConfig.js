import { lazy } from 'react'

const Rooms = lazy(() => import('./all-rooms/RoomScreen'))
const RoomsDetails = lazy(() => import('./all-rooms/one-room/Element'))

const Categories = lazy(() => import('./categories/CategoriesScreen'))
const RoomCategory = lazy(() => import('./categories/category/RoomCategory'))

const Addons = lazy(() => import('./add-ons/AddonsScreen'))
const AddonDetails = lazy(() => import('./add-ons/add-on/Element'))
const AssignAddons = lazy(() => import('./assign/Element'))

const RoomsFeatures = lazy(() => import('./features/CategoriesScreen'))
const RoomDetails = lazy(() => import('./features/feature/Element'))

const RoomConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'rooms/category',
      children: [
        {
          path: '',
          element: <Categories />,
        },
        {
          path: ':productId',
          element: <RoomCategory />,
        },
      ],
    },
    {
      path: 'rooms/list',
      children: [
        {
          path: '',
          element: <Rooms />,
        },
        {
          path: ':productId',
          children: [
            {
              path: '',
              element: <RoomsDetails />,
            },
            {
              path: ':addonsId',
              element: <AssignAddons />,
            },
            {
              path: 'features',
              children: [
                {
                  path: '',
                  element: <RoomsFeatures />,
                },
                {
                  path: ':featureId',
                  element: <RoomDetails />,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      path: 'rooms/add-ons',
      children: [
        {
          path: '',
          element: <Addons />,
        },
        {
          path: ':productId',
          element: <AddonDetails />,
        },
      ],
    },
  ],
}

export default RoomConfig
