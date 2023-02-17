import { combineReducers } from '@reduxjs/toolkit'

import list from './requestsSlice'
import request from './requestSlice'

const reducer = combineReducers({
  list,
  request,
})

export default reducer
