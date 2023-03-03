import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk(
  'hairdryers/hairdryer/getMeasures',
  async () => {
    const response = await axios.get('/api/hair-dryer')
    const data = await response.data
    return data
  }
)

export const removeMeasures = createAsyncThunk(
  'hairdryers/hairdryer',
  async (productIds, { dispatch, getState }) => {
    await axios.delete(`/api/hair-dryer/${productIds}`, {
      data: productIds,
    })
    return productIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.hairdryers.hairdryer)

const safetySlice = createSlice({
  name: 'hairdryers/hairdryer',
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

export const selectProductsSearchText = ({ hairdryers }) =>
  hairdryers.hairdryer.searchText

export default safetySlice.reducer
