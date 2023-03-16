import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk(
  'pooltowels/pooltowel/getMeasures',
  async () => {
    const response = await axios.get('/api/pool-towels')
    const data = await response.data
    return data
  }
)

export const removeMeasures = createAsyncThunk(
  'pooltowels/pooltowel',
  async (productIds, { dispatch, getState }) => {
    await axios.delete(`/api/pool-towels/${productIds}`, {
      data: productIds,
    })
    return productIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.pooltowels.pooltowel)

const safetySlice = createSlice({
  name: 'pooltowels/pooltowel',
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

export const selectProductsSearchText = ({ pooltowels }) =>
  pooltowels.pooltowel.searchText

export default safetySlice.reducer
