import { combineReducers } from '@reduxjs/toolkit'

import climatization from './airConditionerSlice'

const reducer = combineReducers({
  climatization,
})

export default reducer
