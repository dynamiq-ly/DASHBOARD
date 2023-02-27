import { combineReducers } from '@reduxjs/toolkit'

import laundry from './laundriesSlice'
import menu from './menuSlice'

const reducer = combineReducers({
  laundry,
  menu,
})

export default reducer
