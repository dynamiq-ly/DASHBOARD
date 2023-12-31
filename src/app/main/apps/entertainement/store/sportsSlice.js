import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk('entertainements/sports/getMeasures', async () => {
  const response = await axios.get('/api/entertainement/sport-programs')
  const data = await response.data
  return data
})

export const removeMeasures = createAsyncThunk(
  'entertainements/sports',
  async (productIds, { dispatch, getState }) => {
    await axios.delete(`/api/entertainement/sport-programs/${productIds}`, {
      data: productIds,
    })
    return productIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.entertainements.sports)

const safetySlice = createSlice({
  name: 'entertainements/sports',
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

export const selectProductsSearchText = ({ entertainements }) => entertainements.sports.searchText

export default safetySlice.reducer
