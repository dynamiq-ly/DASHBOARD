import { combineReducers } from '@reduxjs/toolkit'

import hairdryer from './hairDryerSlice'
import dryer from './DryerSlice'

const reducer = combineReducers({
  hairdryer,
  dryer,
})

export default reducer
