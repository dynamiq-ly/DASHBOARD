import { combineReducers } from '@reduxjs/toolkit'

import bar from './bars-slice'
import barDetail from './bar-detail-slice'
import staff from './link-bar-staff'

const reducer = combineReducers({
  bar,
  barDetail,
  staff,
})

export default reducer
