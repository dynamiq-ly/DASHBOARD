import { combineReducers } from '@reduxjs/toolkit'

import bar from './bars-slice'
import barDetail from './bar-detail-slice'

const reducer = combineReducers({
  bar,
  barDetail,
})

export default reducer
