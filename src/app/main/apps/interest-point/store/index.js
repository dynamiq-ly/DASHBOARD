import { combineReducers } from '@reduxjs/toolkit'

import pointsCategory from './categorySlice'

const reducer = combineReducers({
  pointsCategory,
})

export default reducer
