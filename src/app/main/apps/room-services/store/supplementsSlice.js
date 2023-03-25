import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk(
  'foodsService/supplements/getMeasures',
  async (plateId, { dispatch, getState }) => {
    const response = await axios.get(`api/room-service/food-service/plate/${plateId}/supplement`)
    const data = await response.data
    return data
  }
)

export const removeMeasures = createAsyncThunk(
  'foodsService/supplements',
  async (plateIds, { dispatch, getState }) => {
    await axios.delete(`api/room-service/food-service/plate/supplement/${plateIds}`, {
      data: plateIds,
    })
    return plateIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.foodsService.supplements)

const safetySlice = createSlice({
  name: 'foodsService/supplements',
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

export const selectProductsSearchText = ({ foodsService }) => foodsService.supplements.searchText

export default safetySlice.reducer
