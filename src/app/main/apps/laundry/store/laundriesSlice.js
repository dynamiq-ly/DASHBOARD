import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk('laundries/laundry/getMeasures', async () => {
  const response = await axios.get('/api/laundry')
  const data = await response.data
  return data
})

export const removeMeasures = createAsyncThunk(
  'laundries/laundry',
  async (productIds, { dispatch, getState }) => {
    await axios.delete(`/api/laundry/${productIds}`, {
      data: productIds,
    })
    return productIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.laundries.laundry)

const safetySlice = createSlice({
  name: 'laundries/laundry',
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

export const selectProductsSearchText = ({ laundries }) => laundries.laundry.searchText

export default safetySlice.reducer
