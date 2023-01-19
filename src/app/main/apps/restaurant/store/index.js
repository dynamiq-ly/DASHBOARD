import { combineReducers } from '@reduxjs/toolkit'

import safety from './restaurantsSlice'

const reducer = combineReducers({
  safety,
})

export default reducer
