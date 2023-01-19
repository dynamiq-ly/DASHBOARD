import { combineReducers } from '@reduxjs/toolkit'

import pointsCategory from './categorySlice'
import points from './pointsSlice'

const reducer = combineReducers({
  pointsCategory,
  points,
})

export default reducer
