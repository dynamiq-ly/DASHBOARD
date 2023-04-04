import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk('housekeeping/clean/getMeasures', async () => {
  const response = await axios.get('/api/house-keeping')
  const data = await response.data
  return data
})

export const removeMeasures = createAsyncThunk(
  'housekeeping/clean',
  async (productIds, { dispatch, getState }) => {
    await axios.delete(`/api/house-keeping/${productIds}`, {
      data: productIds,
    })
    return productIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.housekeeping.clean)

const safetySlice = createSlice({
  name: 'housekeeping/clean',
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
    [removeMeasures.fulfilled]: (state, action) =>
      measuresAdapter.removeMany(state, action.payload),
  },
})

export const { setProductsSearchText } = safetySlice.actions

export const selectProductsSearchText = ({ housekeeping }) => housekeeping.clean.searchText

export default safetySlice.reducer
