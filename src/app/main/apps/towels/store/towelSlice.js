import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk('towels/towel/getMeasures', async () => {
  const response = await axios.get('/api/towels')
  const data = await response.data
  return data
})

export const removeMeasures = createAsyncThunk(
  'towels/towel',
  async (productIds, { dispatch, getState }) => {
    await axios.delete(`/api/towels/${productIds}`, {
      data: productIds,
    })
    return productIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.towels.towel)

const safetySlice = createSlice({
  name: 'towels/towel',
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

export const selectProductsSearchText = ({ towels }) => towels.towel.searchText

export default safetySlice.reducer
