import { combineReducers } from '@reduxjs/toolkit'

import bank from './banksSlice'

const reducer = combineReducers({
  bank,
})

export default reducer
