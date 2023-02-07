import { combineReducers } from '@reduxjs/toolkit'

import categories from './roomCategorySlice'
// import roomListSlice from './roomListSlice'

const reducer = combineReducers({
  categories,
  // roomListSlice,
})

export default reducer
