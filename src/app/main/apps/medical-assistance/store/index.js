import { combineReducers } from '@reduxjs/toolkit'

import assistance from './MedicalSlice'

const reducer = combineReducers({
  assistance,
})

export default reducer
