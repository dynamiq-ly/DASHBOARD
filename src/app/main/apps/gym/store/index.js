import { combineReducers } from '@reduxjs/toolkit'

import gym from './elementSlice'
import details from './gymSlice'

import staffs from './staffsSlice'
import staff from './staffSlice'

const reducer = combineReducers({
  gym,
  details,
  staffs,
  staff,
})

export default reducer
