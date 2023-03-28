import { combineReducers } from '@reduxjs/toolkit'

import restaurant from './restaurantsSlice'
import resto from './restaurantSlice'

import regulations from './regulationsSlice'

const reducer = combineReducers({
  restaurant,
  resto,
  regulations,
})

export default reducer
