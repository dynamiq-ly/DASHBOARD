import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk(
  'restaurants/safety/getMeasures',
  async () => {
    const response = await axios.get('/api/restaurant&status=0')
    const data = await response.data
    return data
  }
)

export const removeMeasures = createAsyncThunk(
  'restaurants/safety',
  async (productIds, { dispatch, getState }) => {
    await axios.delete(`/api/measures/${productIds}`, { data: productIds })
    return productIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.restaurants.safety)

const safetySlice = createSlice({
  name: 'restaurant/safety',
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

export const selectProductsSearchText = ({ restaurants }) =>
  restaurants.safety.searchText

export default safetySlice.reducer
