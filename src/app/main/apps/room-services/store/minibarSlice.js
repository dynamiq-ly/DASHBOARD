import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk('roomService/miniBar/getMeasures', async () => {
  const response = await axios.get('api/room-service/mini-bar')
  const data = await response.data
  return data
})

export const removeMeasures = createAsyncThunk(
  'roomService/miniBar',
  async (productIds, { dispatch, getState }) => {
    await axios.delete(`api/room-service/mini-bar/${productIds}`, { data: productIds })
    return productIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.roomService.miniBar)

const safetySlice = createSlice({
  name: 'roomService/miniBar',
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

export const selectProductsSearchText = ({ roomService }) => roomService.miniBar.searchText

export default safetySlice.reducer
