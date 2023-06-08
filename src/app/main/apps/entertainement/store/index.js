import { combineReducers } from '@reduxjs/toolkit'

import nightShows from './nightsSlice'
import days from './daysSlice'

const reducer = combineReducers({
  nightShows,
  days,
})

export default reducer
