import { combineReducers } from '@reduxjs/toolkit'

import hairdryer from './hairDryerSlice'

const reducer = combineReducers({
  hairdryer,
})

export default reducer
