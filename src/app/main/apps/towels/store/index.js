import { combineReducers } from '@reduxjs/toolkit'

import towel from './towelSlice'

const reducer = combineReducers({
  towel,
})

export default reducer
