import { lazy } from 'react'

const Rooms = lazy(() => import('./RoomScreen'))
const RoomCategory = lazy(() => import('./category/RoomCategoryScreen'))

const RoomConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'rooms/list',
      element: <Rooms />,
    },
    {
      path: 'rooms/category',
      element: <RoomCategory />,
    },
  ],
}

export default RoomConfig
