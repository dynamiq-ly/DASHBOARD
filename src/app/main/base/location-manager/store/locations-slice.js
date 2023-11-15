import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk('locations/locations/getMeasures', async () => {
  const response = await axios.get('/api/helpers/location-manager')
  const data = await response.data
  return data
})

export const removeMeasures = createAsyncThunk(
  'locations/locations',
  async (productIds, { dispatch, getState }) => {
    await axios.delete(`/api/helpers/location-manager/${productIds}`, {
      data: productIds,
    })
    return productIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.locations.locations)

const safetySlice = createSlice({
  name: 'locations/locations',
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

export const selectProductsSearchText = ({ locations }) => locations.locations.searchText

export default safetySlice.reducer
