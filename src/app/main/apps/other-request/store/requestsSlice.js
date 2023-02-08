import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk('requests/list/getMeasures', async () => {
  const response = await axios.get('/api/other-request')
  const data = await response.data
  return data
})

export const removeMeasures = createAsyncThunk(
  'requests/list',
  async (productIds, { dispatch, getState }) => {
    await axios.delete(`/api/other-request/${productIds}`, { data: productIds })
    return productIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.requests.list)

const safetySlice = createSlice({
  name: 'requests/list',
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

export const selectProductsSearchText = ({ requests }) => requests.list.searchText

export default safetySlice.reducer
