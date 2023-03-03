import { combineReducers } from '@reduxjs/toolkit'

import categories from './categoriesSlice'
import category from './categorySlice'

import poolList from './poolListSlice'
import pool from './poolSlice'

const reducer = combineReducers({
  categories,
  category,
  poolList,
  pool,
})

export default reducer
