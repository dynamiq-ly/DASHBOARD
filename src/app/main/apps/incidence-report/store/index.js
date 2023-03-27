import { combineReducers } from '@reduxjs/toolkit'

import incident from './incidenceSlice'
import report from './reportSlice'

const reducer = combineReducers({
  incident,
  report,
})

export default reducer
