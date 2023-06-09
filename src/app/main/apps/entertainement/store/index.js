import { combineReducers } from '@reduxjs/toolkit'

import nights from './nightsSlice'

import days from './daysSlice'
import day from './daySlice'

const reducer = combineReducers({
  nights,
  days,
  day,
})

export default reducer
