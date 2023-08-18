import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk('rooms/roomList/getMeasures', async () => {
  const response = await axios.get('/api/rooms')
  const data = await response.data
  return data
})

export const removeMeasures = createAsyncThunk(
  'rooms/roomList',
  async (productIds, { dispatch, getState }) => {
    await axios.delete(`/api/rooms/${productIds}`, {
      data: productIds,
    })
    return productIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.rooms.roomList)

const safetySlice = createSlice({
  name: 'rooms/roomList',
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

export const selectProductsSearchText = ({ rooms }) => rooms.roomList.searchText

export default safetySlice.reducer
