import { combineReducers } from '@reduxjs/toolkit'

import categories from './categoriesSlice'
import category from './categorySlice'

import addons from './add-ons-Slice'
import addon from './addon-slice'
import assignAddon from './assign-addon-slice'

import roomList from './roomListSlice'
import room from './room-slice'

import features from './features-slice'
import feature from './feature-slice'

const reducer = combineReducers({
  categories,
  category,

  addons,
  addon,
  assignAddon,

  roomList,
  room,

  features,
  feature,
})

export default reducer
