import { combineReducers } from '@reduxjs/toolkit'

import nightShows from './nightsSlice'

const reducer = combineReducers({
  nightShows,
})

export default reducer
