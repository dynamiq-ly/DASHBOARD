import { combineReducers } from '@reduxjs/toolkit'

import clean from './HouseKeepingSlice'
import cleaning from './RoomCleaningSlice'

const reducer = combineReducers({
  clean,
  cleaning,
})

export default reducer
