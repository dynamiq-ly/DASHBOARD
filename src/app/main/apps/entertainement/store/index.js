import { combineReducers } from '@reduxjs/toolkit'

import nights from './nightsSlice'
import night from './nightSlice'

import days from './daysSlice'
import day from './daySlice'

const reducer = combineReducers({
  nights,
  night,
  days,
  day,
})

export default reducer
