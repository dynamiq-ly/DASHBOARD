import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk(
  'pools/categories/getMeasures',
  async () => {
    const response = await axios.get('/api/swimming-pool')
    const data = await response.data
    return data
  }
)

export const removeMeasures = createAsyncThunk(
  'pools/categories',
  async (productIds, { dispatch, getState }) => {
    await axios.delete(`/api/swimming-pool/${productIds}`, {
      data: productIds,
    })
    return productIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.pools.categories)

const safetySlice = createSlice({
  name: 'pools/categories',
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

export const selectProductsSearchText = ({ pools }) =>
  pools.categories.searchText

export default safetySlice.reducer
