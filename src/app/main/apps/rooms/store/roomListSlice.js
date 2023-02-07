import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk(
  'roomLists/roomList/getMeasures',
  async () => {
    const response = await axios.get('/api/rooms/room-list')
    const data = await response.data
    return data
  }
)

export const removeMeasures = createAsyncThunk(
  'roomLists/roomList',
  async (productIds, { dispatch, getState }) => {
    await axios.delete(`/api/roomList/${productIds}`, { data: productIds })
    return productIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.roomLists.roomList)

const safetySlice = createSlice({
  name: 'roomLists/roomList',
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

export const selectProductsSearchText = ({ roomLists }) =>
  roomLists.roomList.searchText

export default safetySlice.reducer
