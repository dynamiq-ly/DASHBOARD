import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk('roomRequests/request/getProduct', async (productId) => {
  const response = await axios.get(`/api/room-request/${productId}`)
  const data = await response.data

  return data === undefined ? null : data
})

export const removeProduct = createAsyncThunk(
  'roomRequests/request/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().roomRequests.request
    await axios.delete(`/api/room-request/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'roomRequests/request/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().roomRequests.request

    const response = await axios.post(`/api/room-request/${id}`, {
      ...productData,
      _method: 'PATCH',
    })
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'roomRequests/request',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          room_request_title: '',
          room_request_content: '',
          room_request_room_number: '',
          isAnsewred: 0,
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

export const selectProduct = ({ roomRequests }) => roomRequests.request

export default productSlice.reducer
