import { combineReducers } from '@reduxjs/toolkit'

import bar from './barSlice'

const reducer = combineReducers({
  bar,
})

export default reducer
