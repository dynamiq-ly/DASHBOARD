import { combineReducers } from '@reduxjs/toolkit'

import categories from './categoriesSlice'
import category from './categorySlice'

import poolList from './poolListSlice'

const reducer = combineReducers({
  categories,
  poolList,
  category,
})

export default reducer
