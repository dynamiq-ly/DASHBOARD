import { combineReducers } from '@reduxjs/toolkit'

import safety from './barSlice'

const reducer = combineReducers({
  safety,
})

export default reducer
