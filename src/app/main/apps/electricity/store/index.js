import { combineReducers } from '@reduxjs/toolkit'

import electricity from './electricitySlice'
import cables from './cableSlice'

const reducer = combineReducers({
  electricity,
  cables,
})

export default reducer
