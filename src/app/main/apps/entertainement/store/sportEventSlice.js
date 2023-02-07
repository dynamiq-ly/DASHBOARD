import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk(
  'eventsSports/eventSport/getMeasures',
  async () => {
    const response = await axios.get('/api/point-of-interest/type')
    const data = await response.data
    return data
  }
)

export const removeMeasures = createAsyncThunk(
  'eventsSports/eventSport',
  async (productIds, { dispatch, getState }) => {
    await axios.delete(`/api/point-of-interest/type/${productIds}`, {
      data: productIds,
    })
    return productIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.eventsSports.eventSport)

const safetySlice = createSlice({
  name: 'eventsSports/eventSport',
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

export const selectProductsSearchText = ({ eventsSports }) =>
  eventsSports.eventSport.searchText

export default safetySlice.reducer
