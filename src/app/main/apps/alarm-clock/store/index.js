import { combineReducers } from '@reduxjs/toolkit'

import alarms from './alarmsSlice'
import alarm from './alarmSlice'

const reducer = combineReducers({
  alarms,
  alarm,
})

export default reducer
