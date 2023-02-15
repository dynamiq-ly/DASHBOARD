import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk('agencies/agenciesList/getMeasures', async () => {
  const response = await axios.get('/api/tour-operator/agency')
  const data = await response.data
  return data
})

export const removeMeasures = createAsyncThunk(
  'agencies/agenciesList',
  async (productIds, { dispatch, getState }) => {
    await axios.delete(`/api/tour-operator/agency/${productIds}`, { data: productIds })
    return productIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.agencies.agenciesList)

const safetySlice = createSlice({
  name: 'agencies/agenciesList',
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

export const selectProductsSearchText = ({ agencies }) => agencies.agenciesList.searchText

export default safetySlice.reducer
