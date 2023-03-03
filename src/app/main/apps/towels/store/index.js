import { combineReducers } from '@reduxjs/toolkit'

import towel from './towelSlice'
import roomtowel from './roomTowelSlice'

const reducer = combineReducers({
  towel,
  roomtowel,
})

export default reducer
