import { combineReducers } from '@reduxjs/toolkit'

import pointsCategory from './categorySlice'
import pointCategory from './typeSlice'

import points from './pointsSlice'

const reducer = combineReducers({
  pointsCategory,
  pointCategory,
  points,
})

export default reducer
