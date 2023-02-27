import { combineReducers } from '@reduxjs/toolkit'

import laundry from './laundriesSlice'
import addLaundry from './insctructionSlice'

import menu from './menuSlice'
import addMenu from './clothSlice'

const reducer = combineReducers({
  laundry,
  addLaundry,
  menu,
  addMenu,
})

export default reducer
