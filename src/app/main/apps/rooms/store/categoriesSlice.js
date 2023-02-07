import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk('rooms/categories/getMeasures', async () => {
  const response = await axios.get('/api/rooms/room-category')
  const data = await response.data
  return data
})

export const removeMeasures = createAsyncThunk(
  'rooms/categories',
  async (productIds, { dispatch, getState }) => {
    await axios.delete(`/api/rooms/room-category/${productIds}`, {
      data: productIds,
    })
    return productIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.rooms.categories)

const safetySlice = createSlice({
  name: 'rooms/categories',
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

export const selectProductsSearchText = ({ rooms }) => rooms.categories.searchText

export default safetySlice.reducer
