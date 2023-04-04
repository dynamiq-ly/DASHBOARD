import { combineReducers } from '@reduxjs/toolkit'

import clean from './HouseKeepingSlice'

const reducer = combineReducers({
  clean,
})

export default reducer
