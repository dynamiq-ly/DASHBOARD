import { combineReducers } from '@reduxjs/toolkit'

import climatization from './airConditionerSlice'
import clima from './climatizationSlice'

const reducer = combineReducers({
  climatization,
  clima,
})

export default reducer
