import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk('gyms/details/getMeasures', async () => {
  const response = await axios.get('/api/gym')
  const data = await response.data
  return data
})

export const removeMeasures = createAsyncThunk('gyms/details', async (productIds, { dispatch, getState }) => {
  await axios.delete(`/api/gym/${productIds}`, { data: productIds })
  return productIds
})

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } = measuresAdapter.getSelectors((state) => state.gyms.details)

const safetySlice = createSlice({
  name: 'gyms/details',
  initialState: measuresAdapter.getInitialState({
    searchText: '',
  }),
  reducers: {
    setProductsSearchText: {
      reducer: (state, action) => {
        state.searchText = action.payload
      },
      prepare: (event) => ({ payload: event.target.value || '' }),
    },
  },
  extraReducers: {
    [getMeasures.fulfilled]: measuresAdapter.setAll,
    [removeMeasures.fulfilled]: (state, action) => measuresAdapter.removeMany(state, action.payload),
  },
})

export const { setProductsSearchText } = safetySlice.actions

export const selectProductsSearchText = ({ gyms }) => gyms.details.searchText

export default safetySlice.reducer
