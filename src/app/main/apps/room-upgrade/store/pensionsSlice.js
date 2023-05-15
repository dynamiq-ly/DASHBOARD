import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk(
  'pensionUpgrade/pensions/getMeasures',
  async (productId, { dispatch, getState }) => {
    const response = await axios.get('/api/pension')
    const data = await response.data
    return data
  }
)

export const removeMeasures = createAsyncThunk(
  'pensionUpgrade/pensions',
  async (productIds, { dispatch, getState }) => {
    await axios.delete(`/api/pension/${productIds}`, {
      data: productIds,
    })
    return productIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.pensionUpgrade.pensions)

const safetySlice = createSlice({
  name: 'pensionUpgrade/pensions',
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

export const selectProductsSearchText = ({ pensionUpgrade }) => pensionUpgrade.pensions.searchText

export default safetySlice.reducer
