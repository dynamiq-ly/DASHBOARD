import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk(
  'eCommerceApp/measures/getMeasures',
  async () => {
    const response = await axios.get(`${process.env.REACT_APP_URL}api/measures`)
    const data = await response.data

    return data
  }
)

export const removeMeasures = createAsyncThunk(
  'eCommerceApp/measures',
  async (measureIds, { dispatch, getState }) => {
    await axios.delete(`${process.env.REACT_APP_URL}api/measures`, {
      data: measureIds,
    })

    return measureIds
  }
)

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectMeasures, selectById: selectMeasureById } =
  measuresAdapter.getSelectors((state) => state.eCommerceApp.measures)

const measuresSlice = createSlice({
  name: 'eCommerceApp/measures',
  initialState: measuresAdapter.getInitialState({
    searchText: '',
  }),
  reducers: {
    setMeasuresSearchText: {
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

export const { setMeasuresSearchText } = measuresSlice.actions

export const selectMeasuresSearchText = ({ eCommerceApp }) =>
  eCommerceApp.measures.searchText

export default measuresSlice.reducer
