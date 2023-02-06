import { combineReducers } from '@reduxjs/toolkit'

import alarms from './alarmsSlice'

const reducer = combineReducers({
  alarms,
})

export default reducer
