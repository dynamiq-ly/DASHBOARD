import { combineReducers } from '@reduxjs/toolkit'

import bar from './bars-slice'
import barDetail from './bar-detail-slice'
import staff from './link-bar-staff'
import menu from './link-bar-menu'

const reducer = combineReducers({
  bar,
  barDetail,
  staff,
  menu,
})

export default reducer
