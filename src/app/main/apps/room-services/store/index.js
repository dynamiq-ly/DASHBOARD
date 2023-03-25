import { combineReducers } from '@reduxjs/toolkit'

import miniBars from './minibarSlice'
import miniBarAE from './barSlice'

import foods from './foodsSlice'
import foodsAE from './foodTimeSlice'
import plates from './platesSlice'
import plate from './plateSlice'
import supplements from './supplementsSlice'

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
  plate,
  supplements,
  // mini bar service
  miniBars,
  miniBarAE,
})

export default reducer
