import { combineReducers } from '@reduxjs/toolkit'

import restaurant from './restaurantsSlice'
import resto from './restaurantSlice'

import regulations from './regulationsSlice'
import regulation from './regulationSlice'

const reducer = combineReducers({
  restaurant,
  resto,
  regulations,
  regulation,
})

export default reducer
