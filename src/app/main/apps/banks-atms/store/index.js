import { combineReducers } from '@reduxjs/toolkit'

import list from './bankSlice'
import bank from './listSlice'

const reducer = combineReducers({
  list,
  bank,
})

export default reducer
