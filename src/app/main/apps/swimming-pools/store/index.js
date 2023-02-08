import { combineReducers } from '@reduxjs/toolkit'

import categories from './categoriesSlice'
import poolList from './poolListSlice'

const reducer = combineReducers({
  categories,
  poolList,
})

export default reducer
