import { combineReducers } from '@reduxjs/toolkit'

import ages from './ages-slice'
import age from './age-slice'

const reducer = combineReducers({
  ages,
  age,
})

export default reducer
