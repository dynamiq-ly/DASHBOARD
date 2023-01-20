import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk('measures/safety/getMeasures', async () => {
  const response = await axios.get('/api/measures')
  const data = await response.data
  return data
})

export const removeMeasures = createAsyncThunk(
  'measures/safeties',
  async (productIds, { dispatch, getState }) => {
    await axios.delete(`/api/measures/${productIds}`, { data: productIds })
    return productIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.measures.safeties)

const safetySlice = createSlice({
  name: 'measures/safeties',
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

export const selectProductsSearchText = ({ measures }) => measures.safeties.searchText

export default safetySlice.reducer
