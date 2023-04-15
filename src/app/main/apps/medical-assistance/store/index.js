import { combineReducers } from '@reduxjs/toolkit'

import assistance from './MedicalSlice'
import medical from './AssistanceSlice'

const reducer = combineReducers({
  assistance,
  medical,
})

export default reducer
