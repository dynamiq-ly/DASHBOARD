import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk(
  'roomService/miniBarAE/getProduct',
  async (productId) => {
    const response = await axios.get(`api/room-service/mini-bar/${productId}`)
    const data = await response.data

    return data === undefined ? null : data
  }
)

export const removeProduct = createAsyncThunk(
  'roomService/miniBarAE/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().roomService.miniBarAE
    await axios.delete(`api/room-service/mini-bar/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'roomService/miniBarAE/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().roomService.miniBarAE

    if (id) {
      const response = await axios.post(`api/room-service/mini-bar/${id}`, {
        ...productData,
        _method: 'PATCH',
      })
      const data = await response.data
      return data
    }
    const response = await axios.post('api/room-service/mini-bar', productData)
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'roomService/miniBarAE',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          mini_bar_item_name: '',
          mini_bar_item_price: 0,
          min_bar_item_type: '',
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

export const selectProduct = ({ roomService }) => roomService.miniBarAE

export default productSlice.reducer
