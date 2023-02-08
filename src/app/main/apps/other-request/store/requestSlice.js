import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk('requests/request/getProduct', async (productId) => {
  const response = await axios.get(`/api/other-request/${productId}`)
  const data = await response.data

  return data === undefined ? null : data
})

export const removeProduct = createAsyncThunk(
  'requests/request/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().requests.request
    await axios.delete(`/api/other-request/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'requests/request/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().requests.request

    const response = await axios.post(`/api/other-request/${id}`, {
      ...productData,
      _method: 'PATCH',
    })
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'requests/request',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          request_name: '',
          request_email: '',
          request_content: '',
          created_at: '',
          isAnsewred: '',
        },
      }),
    },
  },
  extraReducers: {
    [getProduct.fulfilled]: (state, action) => action.payload,
    [saveProduct.fulfilled]: (state, action) => action.payload,
    [removeProduct.fulfilled]: (state, action) => null,
  },
})

export const { newProduct, resetProduct } = productSlice.actions

export const selectProduct = ({ requests }) => requests.request

export default productSlice.reducer
