import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk(
  'incidence/incident/getMeasures',
  async () => {
    const response = await axios.get('/api/report-incident')
    const data = await response.data
    return data
  }
)

export const removeMeasures = createAsyncThunk(
  'incidence/incident',
  async (productIds, { dispatch, getState }) => {
    await axios.delete(`/api/report-incident/${productIds}`, {
      data: productIds,
    })
    return productIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.incidence.incident)

const safetySlice = createSlice({
  name: 'incidence/incident',
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

export const selectProductsSearchText = ({ incidence }) =>
  incidence.incident.searchText

export default safetySlice.reducer
