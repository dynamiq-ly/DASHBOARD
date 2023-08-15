import { combineReducers } from '@reduxjs/toolkit'

import gym from './elementSlice'
import details from './gymSlice'

import staffs from './staffsSlice'
import staff from './staffSlice'

import equipements from './equipementsSlice'
import equipement from './equipementSlice'

const reducer = combineReducers({
  gym,
  details,
  staffs,
  staff,
  equipements,
  equipement,
})

export default reducer
