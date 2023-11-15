import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk('rooms/addons/getMeasures', async () => {
  const response = await axios.get('/api/rooms/addons')
  const data = await response.data
  return data
})

export const removeMeasures = createAsyncThunk(
  'rooms/addons',
  async (productIds, { dispatch, getState }) => {
    await axios.delete(`/api/rooms/addons/${productIds}`, {
      data: productIds,
    })
    return productIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.rooms.addons)

const safetySlice = createSlice({
  name: 'rooms/addons',
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

export const selectProductsSearchText = ({ rooms }) => rooms.addons.searchText

export default safetySlice.reducer
