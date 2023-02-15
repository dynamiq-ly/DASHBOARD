import { lazy } from 'react'

const Rooms = lazy(() => import('./RoomScreen'))
const Categories = lazy(() => import('./categories/CategoriesScreen'))
const RoomCategory = lazy(() => import('./categories/category/RoomCategory'))
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
  ],
}

export default RoomConfig
