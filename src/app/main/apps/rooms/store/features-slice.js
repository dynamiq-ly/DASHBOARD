import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk(
  'rooms/features/getMeasures',
  async (productId, { dispatch, getState }) => {
    const response = await axios.get(`/api/rooms/features?query=${productId}`)
    const data = await response.data
    return data
  }
)

export const removeMeasures = createAsyncThunk(
  'rooms/features',
  async (productIds, { dispatch, getState }) => {
    await axios.delete(`/api/rooms/features/${productIds}`, {
      data: productIds,
    })
    return productIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.rooms.features)

const safetySlice = createSlice({
  name: 'rooms/features',
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

export const selectProductsSearchText = ({ rooms }) => rooms.features.searchText

export default safetySlice.reducer
