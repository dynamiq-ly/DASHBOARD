import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk(
  'categories/category/getMeasures',
  async () => {
    const response = await axios.get('/api/excursion/activities')
    const data = await response.data
    return data
  }
)

export const removeMeasures = createAsyncThunk(
  'categories/category',
  async (productIds, { dispatch, getState }) => {
    await axios.delete(`/api/excursion/activities/${productIds}`, {
      data: productIds,
    })
    return productIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.categories.category)

const safetySlice = createSlice({
  name: 'categories/category',
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

export const selectProductsSearchText = ({ categories }) =>
  categories.category.searchText

export default safetySlice.reducer
