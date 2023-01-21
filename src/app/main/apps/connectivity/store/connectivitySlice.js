import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk('connectivities/connectivity/getMeasures', async () => {
  const response = await axios.get('/api/connectivity')
  const data = await response.data
  return data
})

export const removeMeasures = createAsyncThunk(
  'connectivities/connectivity',
  async (productIds, { dispatch, getState }) => {
    await axios.delete(`/api/connectivity/${productIds}`, { data: productIds })
    return productIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.connectivities.connectivity)

const safetySlice = createSlice({
  name: 'connectivities/connectivity',
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

export const selectProductsSearchText = ({ connectivities }) =>
  connectivities.connectivity.searchText

export default safetySlice.reducer
