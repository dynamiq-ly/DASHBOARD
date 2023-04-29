import { combineReducers } from '@reduxjs/toolkit'

import restaurants from './restaurantsSlice'
import restaurant from './restaurantSlice'
import regulations from './regulationsSlice'
import regulation from './regulationSlice'
import servings from './servingsSlice'
import serving from './servingSlice'

const reducer = combineReducers({
  restaurants,
  restaurant,
  regulations,
  regulation,
  servings,
  serving,
})

export default reducer
