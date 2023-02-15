import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk('excursions/list/getMeasures', async () => {
  const response = await axios.get('/api/excursion/activity')
  const data = await response.data
  return data
})

export const removeMeasures = createAsyncThunk(
  'excursions/list',
  async (productIds, { dispatch, getState }) => {
    await axios.delete(`/api/excursion/activity/${productIds}`, { data: productIds })
    return productIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.excursions.list)

const safetySlice = createSlice({
  name: 'excursions/list',
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

export const selectProductsSearchText = ({ excursions }) => excursions.list.searchText

export default safetySlice.reducer
