import { combineReducers } from '@reduxjs/toolkit'

import category from './categoriesSlice'
import activity from './categorySlice'

import list from './excursionsSlice'

const reducer = combineReducers({
  list,
  category,
  activity,
})

export default reducer
