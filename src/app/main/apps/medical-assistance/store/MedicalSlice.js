import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk(
  'medicalmeasures/assistance/getMeasures',
  async () => {
    const response = await axios.get('/api/medical-assistance')
    const data = await response.data
    return data
  }
)

export const removeMeasures = createAsyncThunk(
  'medicalmeasures/assistance',
  async (productIds, { dispatch, getState }) => {
    await axios.delete(`/api/medical-assistance/${productIds}`, {
      data: productIds,
    })
    return productIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.medicalmeasures.assistance)

const safetySlice = createSlice({
  name: 'medicalmeasures/assistance',
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

export const selectProductsSearchText = ({ medicalmeasures }) =>
  medicalmeasures.assistance.searchText

export default safetySlice.reducer
