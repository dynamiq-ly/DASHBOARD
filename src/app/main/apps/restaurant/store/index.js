import { combineReducers } from '@reduxjs/toolkit'

import restaurants from './restaurantsSlice'
import restaurant from './restaurantSlice'
import regulations from './regulationsSlice'
import regulation from './regulationSlice'
import servings from './servingsSlice'
import serving from './servingSlice'
import specialities from './specialitiesSlice'
import specialty from './specialtySlice'
import chefs from './chefsSlice'
import chef from './chefSlice'

const reducer = combineReducers({
  restaurants,
  restaurant,
  regulations,
  regulation,
  servings,
  serving,
  specialities,
  specialty,
  chefs,
  chef,
})

export default reducer
