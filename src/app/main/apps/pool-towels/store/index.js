import { combineReducers } from '@reduxjs/toolkit'

import pooltowel from './poolTowelSlice'
import towelforpool from './towelForPoolSlice'

const reducer = combineReducers({
  pooltowel,
  towelforpool,
})

export default reducer
