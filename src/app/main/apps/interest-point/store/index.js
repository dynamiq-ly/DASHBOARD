import { combineReducers } from '@reduxjs/toolkit'

import pointsCategory from './categorySlice'
import pointCategory from './typeSlice'

import points from './pointsSlice'
import point from './pointSlice'

const reducer = combineReducers({
  pointsCategory,
  pointCategory,
  points,
  point,
})

export default reducer
