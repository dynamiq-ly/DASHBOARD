import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk(
  'pointsCategories/pointsCategory/getMeasures',
  async () => {
    const response = await axios.get('/api/point-of-interest/categories')
    const data = await response.data
    return data
  }
)

export const removeMeasures = createAsyncThunk(
  'pointsCategories/pointsCategory',
  async (productIds, { dispatch, getState }) => {
    await axios.delete(`/api/point-of-interest/categories/${productIds}`, {
      data: productIds,
    })
    return productIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.pointsCategories.pointsCategory)

const safetySlice = createSlice({
  name: 'pointsCategories/pointsCategory',
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

export const selectProductsSearchText = ({ pointsCategories }) =>
  pointsCategories.pointsCategory.searchText

export default safetySlice.reducer
