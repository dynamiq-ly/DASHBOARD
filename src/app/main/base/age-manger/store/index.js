import { combineReducers } from '@reduxjs/toolkit'

import ages from './ages-slice'

const reducer = combineReducers({
  ages,
})

export default reducer
