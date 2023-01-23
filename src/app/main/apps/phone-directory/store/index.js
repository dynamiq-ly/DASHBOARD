import { combineReducers } from '@reduxjs/toolkit'

import directory from './directoriesSlice'

const reducer = combineReducers({
  directory,
})

export default reducer
