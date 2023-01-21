import { combineReducers } from '@reduxjs/toolkit'

import connectivity from './connectivitySlice'
import connection from './cnxSlice'

const reducer = combineReducers({
  connectivity,
  connection,
})

export default reducer
