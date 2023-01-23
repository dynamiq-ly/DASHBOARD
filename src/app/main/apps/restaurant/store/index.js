import { combineReducers } from '@reduxjs/toolkit'

import restaurant from './restaurantsSlice'
import resto from './restaurantSlice'

const reducer = combineReducers({
  restaurant,
  resto,
})

export default reducer
