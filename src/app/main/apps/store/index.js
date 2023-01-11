import { combineReducers } from '@reduxjs/toolkit'

import safety from './safetySlice'
import protocol from './protocolSlice'

const reducer = combineReducers({
  safety,
  protocol,
})

export default reducer
