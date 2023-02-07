import { combineReducers } from '@reduxjs/toolkit'

import nightShows from './nightsSlice'
import dayActivities from './daysSlice'

const reducer = combineReducers({
  nightShows,
  dayActivities,
})

export default reducer
