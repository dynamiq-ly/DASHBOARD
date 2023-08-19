import { combineReducers } from '@reduxjs/toolkit'

import bar from './bars-slice'
import item from './barItemSlice'

const reducer = combineReducers({
  bar,
  item,
})

export default reducer
