import { combineReducers } from '@reduxjs/toolkit'

import upload from './image-upload-slice'

const reducer = combineReducers({
  upload,
})

export default reducer
