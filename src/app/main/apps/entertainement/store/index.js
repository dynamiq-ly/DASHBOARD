import { combineReducers } from '@reduxjs/toolkit'

import dayActivity from './dayActivitySlice'
import eventProgram from './eventProgramSlice'
import sportEvent from './sportEventSlice'
import nightShow from './nightShowSlice'

const reducer = combineReducers({
  dayActivity,
  eventProgram,
  sportEvent,
  nightShow,
})

export default reducer
