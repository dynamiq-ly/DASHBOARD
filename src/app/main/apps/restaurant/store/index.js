import { combineReducers } from '@reduxjs/toolkit'

import restaurants from './restaurantsSlice'
import restaurant from './restaurantSlice'
import regulations from './regulationsSlice'
import regulation from './regulationSlice'

const reducer = combineReducers({
  restaurants,
  restaurant,
  regulations,
  regulation,
})

export default reducer
