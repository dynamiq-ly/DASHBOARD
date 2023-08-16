import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk('interestPoints/points/getMeasures', async () => {
  const response = await axios.get('/api/point-of-interest')
  const data = await response.data
  return data
})

export const removeMeasures = createAsyncThunk(
  'interestPoints/points',
  async (productIds, { dispatch, getState }) => {
    await axios.delete(`/api/point-of-interest/${productIds}`, {
      data: productIds,
    })
    return productIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.interestPoints.points)

const safetySlice = createSlice({
  name: 'interestPoints/points',
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

export const selectProductsSearchText = ({ interestPoints }) => interestPoints.points.searchText

export default safetySlice.reducer
