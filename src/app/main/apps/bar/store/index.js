import { combineReducers } from '@reduxjs/toolkit'

import bar from './bars-slice'
import barDetail from './bar-detail-slice'
import staff from './link-bar-staff'
import menu from './link-bar-menu'
import soft from './menu-soft-drinks'
import alcohol from './menu-alcohol-drinks'

const reducer = combineReducers({
  bar,
  barDetail,
  staff,
  menu,
  soft,
  alcohol,
})

export default reducer
