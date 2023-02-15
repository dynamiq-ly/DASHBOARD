import { combineReducers } from '@reduxjs/toolkit'

import category from './categoriesSlice'
import list from './excursionsSlice'

const reducer = combineReducers({
  list,
  category,
})

export default reducer
