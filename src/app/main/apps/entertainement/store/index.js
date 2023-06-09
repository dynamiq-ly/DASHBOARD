import { combineReducers } from '@reduxjs/toolkit'

import nightShows from './nightsSlice'

import days from './daysSlice'
import day from './daySlice'

const reducer = combineReducers({
  nightShows,
  days,
  day,
})

export default reducer
