import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk('roomService/drinks/getMeasures', async () => {
  const response = await axios.get('api/room-service/drink-service/category')
  const data = await response.data
  return data
})

export const removeMeasures = createAsyncThunk(
  'roomService/drinks',
  async (productIds, { dispatch, getState }) => {
    await axios.delete(`api/room-service/drink-service/category/${productIds}`, {
      data: productIds,
    })
    return productIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.roomService.drinks)

const safetySlice = createSlice({
  name: 'roomService/drinks',
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

export const selectProductsSearchText = ({ roomService }) => roomService.drinks.searchText

export default safetySlice.reducer
