import { combineReducers } from '@reduxjs/toolkit'

import folders from './foldersSlice'
import files from './filesSlice'

const reducer = combineReducers({
  folders,
  files,
})

export default reducer
