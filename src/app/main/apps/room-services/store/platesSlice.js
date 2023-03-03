import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk(
  'foodsService/plates/getMeasures',
  async (productId, { dispatch, getState }) => {
    const response = await axios.get(`api/room-service/food-service/${productId}/plate`)
    const data = await response.data
    return data
  }
)

export const removeMeasures = createAsyncThunk(
  'foodsService/plates',
  async (productIds, { dispatch, getState }) => {
    await axios.delete(`api/room-service/food-service/plate/${productIds}`, { data: productIds })
    return productIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.foodsService.plates)

const safetySlice = createSlice({
  name: 'foodsService/plates',
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

export const selectProductsSearchText = ({ foodsService }) => foodsService.plates.searchText

export default safetySlice.reducer
