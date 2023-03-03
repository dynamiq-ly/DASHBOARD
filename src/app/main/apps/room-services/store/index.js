import { combineReducers } from '@reduxjs/toolkit'

import miniBars from './minibarSlice'
import miniBarAE from './barSlice'

import foods from './foodsSlice'
import foodsAE from './foodTimeSlice'
import plates from './platesSlice'

import drinks from './drinksSlice'
import category from './drinkSlice'

const reducer = combineReducers({
  // drink service
  drinks,
  category,
  // food service
  foods,
  foodsAE,
  plates,
  // mini bar service
  miniBars,
  miniBarAE,
})

export default reducer
