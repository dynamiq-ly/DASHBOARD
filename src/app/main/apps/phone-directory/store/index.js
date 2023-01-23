import { combineReducers } from '@reduxjs/toolkit'

import directory from './directoriesSlice'
import phone from './phoneSlice'

const reducer = combineReducers({
  directory,
  phone,
})

export default reducer
