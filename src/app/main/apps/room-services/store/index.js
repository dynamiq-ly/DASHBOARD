import { combineReducers } from '@reduxjs/toolkit'

import miniBars from './minibarSlice'
import miniBarAE from './barSlice'

import foods from './foodsSlice'
import foodsAE from './foodTimeSlice'

import drinks from './drinksSlice'

const reducer = combineReducers({
  drinks,
  foods,
  foodsAE,
  miniBars,
  miniBarAE,
})

export default reducer
