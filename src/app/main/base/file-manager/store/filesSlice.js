import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getFiles = createAsyncThunk('fileManager/files/getFiles', async () => {
  const response = await axios.get('api/file-manager')
  const data = await response.data
  return data
})

const measuresAdapter = createEntityAdapter({})

export const { selectAll: selectProducts, selectById: selectProductById } =
  measuresAdapter.getSelectors((state) => state.fileManager.files)

const safetySlice = createSlice({
  name: 'fileManager/files',
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
    [getFiles.fulfilled]: measuresAdapter.setAll,
  },
})

export const { setProductsSearchText } = safetySlice.actions

export const selectProductsSearchText = ({ fileManager }) => fileManager.files.searchText

export default safetySlice.reducer
