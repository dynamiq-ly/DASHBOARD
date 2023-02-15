import { combineReducers } from '@reduxjs/toolkit'

import list from './excursionsSlice'

const reducer = combineReducers({
  list,
})

export default reducer
