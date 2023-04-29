import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk(
  'restaurantFacility/regulations/getMeasures',
  async (productId, { dispatch, getState }) => {
    const response = await axios.get(`/api/restaurant/regulations?query=${productId}`)
    const data = await response.data
    return data
  }
)

export const removeMeasures = createAsyncThunk(
  'restaurantFacility/regulations',
  async (productIds, { dispatch, getState }) => {
    await axios.delete(`/api/restaurant/regulations${productIds}`, {
      data: productIds,
    })
    return productIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.restaurantFacility.regulations)

const safetySlice = createSlice({
  name: 'restaurantFacility/regulations',
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

export const selectProductsSearchText = ({ restaurantFacility }) =>
  restaurantFacility.regulations.searchText

export default safetySlice.reducer
