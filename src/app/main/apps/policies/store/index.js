import { combineReducers } from '@reduxjs/toolkit'

import safeties from './safetiesSlice'
import safety from './safetySlice'

const reducer = combineReducers({
  safeties,
  safety,
})

export default reducer
