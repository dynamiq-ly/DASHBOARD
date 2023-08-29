import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk('ages/ages/getMeasures', async () => {
  const response = await axios.get('/api/helpers/age-manager')
  const data = await response.data
  return data
})

export const removeMeasures = createAsyncThunk(
  'ages/ages',
  async (productIds, { dispatch, getState }) => {
    await axios.delete(`/api/helpers/age-manager/${productIds}`, {
      data: productIds,
    })
    return productIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.ages.ages)

const safetySlice = createSlice({
  name: 'ages/ages',
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

export const selectProductsSearchText = ({ ages }) => ages.ages.searchText

export default safetySlice.reducer
