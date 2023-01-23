import { combineReducers } from '@reduxjs/toolkit'

import miniBars from './minibarSlice'
import foods from './foodsSlice'
import drinks from './drinksSlice'

const reducer = combineReducers({
  miniBars,
  foods,
  drinks,
})

export default reducer
