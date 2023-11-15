import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk(
  'gyms/equipements/getMeasures',
  async (productId, { dispatch, getState }) => {
    const response = await axios.get(`/api/gym/equipements?query=${productId}`)
    const data = await response.data
    return data
  }
)

export const removeMeasures = createAsyncThunk(
  'gyms/equipements',
  async (productIds, { dispatch, getState }) => {
    await axios.delete(`/api/gym/equipements/${productIds}`, {
      data: productIds,
    })
    return productIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.gyms.equipements)

const safetySlice = createSlice({
  name: 'gyms/equipements',
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

export const selectProductsSearchText = ({ gyms }) => gyms.equipements.searchText

export default safetySlice.reducer
