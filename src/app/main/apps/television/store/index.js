import { combineReducers } from '@reduxjs/toolkit'

import television from './televisionSlice'
import tv from './tvSlice'

const reducer = combineReducers({
  television,
  tv,
})

export default reducer
