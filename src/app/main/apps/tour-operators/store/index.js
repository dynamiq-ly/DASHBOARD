import { combineReducers } from '@reduxjs/toolkit'

import agenciesList from './agenciesSlice'

const reducer = combineReducers({
  agenciesList,
})

export default reducer
