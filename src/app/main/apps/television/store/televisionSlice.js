import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk(
  'televisions/television/getMeasures',
  async () => {
    const response = await axios.get('/api/television')
    const data = await response.data
    return data
  }
)

export const removeMeasures = createAsyncThunk(
  'televisions/television',
  async (productIds, { dispatch, getState }) => {
    await axios.delete(`/api/television/${productIds}`, {
      data: productIds,
    })
    return productIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.televisions.television)

const safetySlice = createSlice({
  name: 'televisions/television',
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

export const selectProductsSearchText = ({ televisions }) =>
  televisions.television.searchText

export default safetySlice.reducer
