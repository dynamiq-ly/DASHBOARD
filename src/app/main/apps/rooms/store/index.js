import { combineReducers } from '@reduxjs/toolkit'

import categories from './categoriesSlice'
import category from './categorySlice'

import addons from './add-ons-Slice'
import addon from './addon-slice'

import roomList from './roomListSlice'

const reducer = combineReducers({
  categories,
  category,

  addons,
  addon,

  roomList,
})

export default reducer
