import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk(
  'restaurantFacility/restaurants/getMeasures',
  async () => {
    const response = await axios.get('/api/restaurant')
    const data = await response.data
    return data
  }
)

export const removeMeasures = createAsyncThunk(
  'restaurantFacility/restaurants',
  async (productIds, { dispatch, getState }) => {
    await axios.delete(`/api/restaurant/${productIds}`, {
      data: productIds,
    })
    return productIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.restaurantFacility.restaurants)

const safetySlice = createSlice({
  name: 'restaurantFacility/restaurants',
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
  restaurantFacility.restaurants.searchText

export default safetySlice.reducer
