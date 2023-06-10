import { combineReducers } from '@reduxjs/toolkit'

import nights from './nightsSlice'
import night from './nightSlice'

import days from './daysSlice'
import day from './daySlice'

import sports from './sportsSlice'
import sport from './sportSlice'

const reducer = combineReducers({
  nights,
  night,
  days,
  day,
  sports,
  sport,
})

export default reducer
