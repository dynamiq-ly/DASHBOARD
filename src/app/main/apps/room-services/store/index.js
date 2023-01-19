import { combineReducers } from '@reduxjs/toolkit'

import miniBar from './minibarSlice'

const reducer = combineReducers({
  miniBar,
})

export default reducer
