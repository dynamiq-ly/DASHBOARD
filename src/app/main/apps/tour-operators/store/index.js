import { combineReducers } from '@reduxjs/toolkit'

import agenciesList from './agenciesSlice'
import agency from './agencySlice'

const reducer = combineReducers({
  agenciesList,
  agency,
})

export default reducer
