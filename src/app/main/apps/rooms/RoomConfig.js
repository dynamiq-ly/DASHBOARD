import { lazy } from 'react'

const Rooms = lazy(() => import('./all-rooms/RoomScreen'))

const Categories = lazy(() => import('./categories/CategoriesScreen'))
const RoomCategory = lazy(() => import('./categories/category/RoomCategory'))

const Addons = lazy(() => import('./add-ons/AddonsScreen'))
const AddonDetails = lazy(() => import('./add-ons/add-on/Element'))

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
      element: <Rooms />,
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
