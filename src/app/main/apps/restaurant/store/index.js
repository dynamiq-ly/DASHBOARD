import { combineReducers } from '@reduxjs/toolkit'

import restaurant from './restaurantsSlice'

const reducer = combineReducers({
  restaurant,
})

export default reducer
