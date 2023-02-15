import { combineReducers } from '@reduxjs/toolkit'

import category from './categoriesSlice'

const reducer = combineReducers({
  category,
})

export default reducer
