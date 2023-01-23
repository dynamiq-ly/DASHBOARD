import { combineReducers } from '@reduxjs/toolkit'

import miniBars from './minibarSlice'
import miniBarAE from './barSlice'

import foods from './foodsSlice'

import drinks from './drinksSlice'

const reducer = combineReducers({
  miniBars,
  foods,
  drinks,
  miniBarAE,
})

export default reducer
