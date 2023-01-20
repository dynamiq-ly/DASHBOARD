import { combineReducers } from '@reduxjs/toolkit'

import connectivity from './connectivitySlice'

const reducer = combineReducers({
  connectivity,
})

export default reducer
