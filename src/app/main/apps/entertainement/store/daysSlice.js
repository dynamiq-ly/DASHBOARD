import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk(
  'entertainements/dayActivities/getMeasures',
  async () => {
    const response = await axios.get('/api/entertainement=dday-activities')
    const data = await response.data
    return data
  }
)

export const removeMeasures = createAsyncThunk(
  'entertainements/dayActivities',
  async (productIds, { dispatch, getState }) => {
    await axios.delete(`/api/entertainement/${productIds}`, {
      data: productIds,
    })
    return productIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.entertainements.dayActivities)

const safetySlice = createSlice({
  name: 'entertainements/dayActivities',
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

export const selectProductsSearchText = ({ entertainements }) =>
  entertainements.dayActivities.searchText

export default safetySlice.reducer
