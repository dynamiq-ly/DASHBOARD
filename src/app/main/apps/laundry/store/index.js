import { combineReducers } from '@reduxjs/toolkit'

import laundry from './laundriesSlice'

import menu from './menuSlice'
import addMenu from './clothSlice'

const reducer = combineReducers({
  laundry,
  menu,
  addMenu,
})

export default reducer
