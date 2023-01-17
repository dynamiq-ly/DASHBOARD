import { combineReducers } from '@reduxjs/toolkit'

import safety from './safetySlice'

const reducer = combineReducers({
  safety,
})

export default reducer
