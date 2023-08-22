import { combineReducers } from '@reduxjs/toolkit'

import nights from './nightsSlice'
import night from './nightSlice'

import days from './daysSlice'
import day from './daySlice'
import dayTiming from './day-timing'

import sports from './sportsSlice'
import sport from './sportSlice'

const reducer = combineReducers({
  nights,
  night,
  days,
  day,
  dayTiming,
  sports,
  sport,
})

export default reducer
