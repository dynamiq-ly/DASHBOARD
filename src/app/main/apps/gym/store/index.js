import { combineReducers } from '@reduxjs/toolkit'

import gym from './gymSlice'

const reducer = combineReducers({
  gym,
})

export default reducer
