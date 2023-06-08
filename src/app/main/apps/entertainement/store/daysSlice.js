import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk('entertainements/days/getMeasures', async () => {
  const response = await axios.get('/api/entertainement/day-activities')
  const data = await response.data
  return data
})

export const removeMeasures = createAsyncThunk(
  'entertainements/days',
  async (productIds, { dispatch, getState }) => {
    await axios.delete(`/api/entertainement/day-activities/${productIds}`, {
      data: productIds,
    })
    return productIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.entertainements.days)

const safetySlice = createSlice({
  name: 'entertainements/days',
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

export const selectProductsSearchText = ({ entertainements }) => entertainements.days.searchText

export default safetySlice.reducer
