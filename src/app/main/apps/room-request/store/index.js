import { combineReducers } from '@reduxjs/toolkit'

import list from './requestsSlice'

const reducer = combineReducers({
  list,
})

export default reducer
