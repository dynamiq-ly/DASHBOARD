import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk('entertainements/nights/getMeasures', async () => {
  const response = await axios.get('/api/entertainement/night-shows')
  const data = await response.data
  return data
})

export const removeMeasures = createAsyncThunk(
  'entertainements/nights',
  async (productIds, { dispatch, getState }) => {
    await axios.delete(`/api/entertainement/night-shows/${productIds}`, {
      data: productIds,
    })
    return productIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.entertainements.nights)

const safetySlice = createSlice({
  name: 'entertainements/nights',
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

export const selectProductsSearchText = ({ entertainements }) => entertainements.nights.searchText

export default safetySlice.reducer
