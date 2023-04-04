import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk(
  'housekeeping/cleaning/getProduct',
  async (productId) => {
    const response = await axios.get(`/api/house-keeping/${productId}`)
    const data = await response.data

    return data === undefined ? null : data
  }
)

export const removeProduct = createAsyncThunk(
  'housekeeping/cleaning/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().housekeeping.cleaning
    await axios.delete(`/api/house-keeping/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'housekeeping/cleaning/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().housekeeping.cleaning

    const response = await axios.post(`/api/house-keeping/${id}`, {
      ...productData,
      _method: 'PATCH',
    })
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'housekeeping/cleaning',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          request: '',
          room_number: '',
          isAnsexred: 0,
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

export const selectProduct = ({ housekeeping }) => housekeeping.cleaning

export default productSlice.reducer
