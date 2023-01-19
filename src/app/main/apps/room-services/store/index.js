import { combineReducers } from '@reduxjs/toolkit'

import miniBars from './minibarSlice'
import foods from './foodsSlice'

const reducer = combineReducers({
  miniBars,
  foods,
})

export default reducer
