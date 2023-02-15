import { combineReducers } from '@reduxjs/toolkit'

import categories from './categoriesSlice'
import roomList from './roomListSlice'
import category from './categorySlice'

const reducer = combineReducers({
  categories,
  roomList,
  category,
})

export default reducer
