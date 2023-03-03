import { combineReducers } from '@reduxjs/toolkit'

import television from './televisionSlice'

const reducer = combineReducers({
  television,
})

export default reducer
