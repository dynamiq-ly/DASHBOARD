import { combineReducers } from '@reduxjs/toolkit'

import electricity from './electricitySlice'

const reducer = combineReducers({
  electricity,
})

export default reducer
