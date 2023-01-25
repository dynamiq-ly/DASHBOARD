import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk('gyms/gym/getMeasures', async () => {
  const response = await axios.get('/api/gym')
  const data = await response.data
  return data
})

export const removeMeasures = createAsyncThunk(
  'gyms/gym',
  async (productIds, { dispatch, getState }) => {
    await axios.delete(`/api/gym/${productIds}`, { data: productIds })
    return productIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.gyms.gym)

const safetySlice = createSlice({
  name: 'gyms/gym',
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

export const selectProductsSearchText = ({ gyms }) => gyms.gym.searchText

export default safetySlice.reducer
