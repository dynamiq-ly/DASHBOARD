import { combineReducers } from '@reduxjs/toolkit'

import gym from './elementSlice'
import details from './gymSlice'

const reducer = combineReducers({
  gym,
  details,
})

export default reducer
