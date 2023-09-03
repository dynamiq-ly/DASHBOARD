import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const saveProduct = createAsyncThunk(
  'imageUpload/upload/saveProduct',
  async (productData, { dispatch, getState }) => {
    const response = await axios
      .post('/api/helpers/file-manager/files', productData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(
        (res) =>
          res.status === 200 &&
          // eslint-disable-next-line no-alert
          alert(
            `File has been added to ${productData.feature} ${
              productData.path ? `in ${productData.path}` : ''
            } `
          )
      )
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'imageUpload/upload',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          name: '',
          feature: '',
          path: '',
          images: '',
        },
      }),
    },
  },
  extraReducers: {
    [saveProduct.fulfilled]: (state, action) => action.payload,
  },
})

export const { newProduct, resetProduct } = productSlice.actions

export const selectProduct = ({ imageUpload }) => imageUpload.upload

export default productSlice.reducer
