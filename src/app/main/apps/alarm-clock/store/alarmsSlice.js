import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk('reminders/alarms/getMeasures', async () => {
  const response = await axios.get('/api/reception/reminder')
  const data = await response.data
  return data
})

export const removeMeasures = createAsyncThunk(
  'reminders/alarms',
  async (productIds, { dispatch, getState }) => {
    await axios.delete(`/api/reception/reminder/${productIds}`, { data: productIds })
    return productIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.reminders.alarms)

const safetySlice = createSlice({
  name: 'reminders/alarms',
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

export const selectProductsSearchText = ({ reminders }) => reminders.alarms.searchText

export default safetySlice.reducer
