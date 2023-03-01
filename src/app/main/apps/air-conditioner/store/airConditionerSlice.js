import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk(
  'climatizations/climatization/getMeasures',
  async () => {
    const response = await axios.get('/api/air-conditionner')
    const data = await response.data
    return data
  }
)

export const removeMeasures = createAsyncThunk(
  'climatizations/climatization',
  async (productIds, { dispatch, getState }) => {
    await axios.delete(`/api/air-conditionner/${productIds}`, {
      data: productIds,
    })
    return productIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.climatizations.climatization)

const safetySlice = createSlice({
  name: 'climatizations/climatization',
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

export const selectProductsSearchText = ({ climatizations }) =>
  climatizations.climatization.searchText

export default safetySlice.reducer
