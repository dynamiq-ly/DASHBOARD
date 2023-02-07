import { lazy } from 'react'

const Rooms = lazy(() => import('./RoomScreen'))
const Categories = lazy(() => import('./categories/CategoriesScreen'))

const RoomConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'rooms/category',
      element: <Categories />,
    },
    {
      path: 'rooms/list',
      element: <Rooms />,
    },
  ],
}

export default RoomConfig
