import { combineReducers } from '@reduxjs/toolkit'

import incident from './incidenceSlice'

const reducer = combineReducers({
  incident,
})

export default reducer
