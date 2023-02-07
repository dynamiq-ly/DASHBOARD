import { combineReducers } from '@reduxjs/toolkit'

import categories from './categoriesSlice'
import roomList from './roomListSlice'

const reducer = combineReducers({
  categories,
  roomList,
})

export default reducer
