import { combineReducers } from '@reduxjs/toolkit'

import pensions from './pensionsSlice'
import pension from './pensionSlice'

const reducer = combineReducers({
  pensions,
  pension,
})

export default reducer
