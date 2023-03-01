import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk(
  'electricities/electricity /getMeasures',
  async () => {
    const response = await axios.get('/api/electricity ')
    const data = await response.data
    return data
  }
)

export const removeMeasures = createAsyncThunk(
  'electricities/electricity',
  async (productIds, { dispatch, getState }) => {
    await axios.delete(`/api/electricity/${productIds}`, { data: productIds })
    return productIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.electricities.electricity)

const safetySlice = createSlice({
  name: 'electricities/electricity ',
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

export const selectProductsSearchText = ({ electricities }) =>
  electricities.electricity.searchText

export default safetySlice.reducer
