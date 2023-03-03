import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk('pools/poolList/getMeasures', async () => {
  const response = await axios.get('/api/pools')
  const data = await response.data
  return data
})

export const removeMeasures = createAsyncThunk(
  'pools/poolList',
  async (productIds, { dispatch, getState }) => {
    await axios.delete(`/api/pools/${productIds}`, {
      data: productIds,
    })
    return productIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.pools.poolList)

const poolistSlice = createSlice({
  name: 'pools/poolList',
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

export const { setProductsSearchText } = poolistSlice.actions

export const selectProductsSearchText = ({ pools }) => pools.poolList.searchText

export default poolistSlice.reducer
