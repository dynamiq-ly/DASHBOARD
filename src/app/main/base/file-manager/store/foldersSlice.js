import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasures = createAsyncThunk('fileManager/folders/getMeasures', async () => {
  const response = await axios.get('api/file-manager/directories')
  const data = await response.data
  return data
})

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.fileManager.folders)

const safetySlice = createSlice({
  name: 'fileManager/folders',
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
  },
})

export const { setProductsSearchText } = safetySlice.actions

export const selectProductsSearchText = ({ fileManager }) => fileManager.folders.searchText

export default safetySlice.reducer
