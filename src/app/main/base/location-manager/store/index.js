import { combineReducers } from '@reduxjs/toolkit'

import locations from './locations-slice'
import location from './location-slice'

const reducer = combineReducers({
  locations,
  location,
})

export default reducer
