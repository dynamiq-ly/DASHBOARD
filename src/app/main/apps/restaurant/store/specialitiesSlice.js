import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk(
  'restaurantFacility/specialities/getMeasures',
  async (productId, { dispatch, getState }) => {
    const response = await axios.get(`/api/restaurant/speciality?query=${productId}`)
    const data = await response.data
    return data
  }
)

export const removeMeasures = createAsyncThunk(
  'restaurantFacility/specialities',
  async (productIds, { dispatch, getState }) => {
    await axios.delete(`/api/restaurant/speciality/${productIds}`, {
      data: productIds,
    })
    return productIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.restaurantFacility.specialities)

const safetySlice = createSlice({
  name: 'restaurantFacility/specialities',
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
  restaurantFacility.specialities.searchText

export default safetySlice.reducer
