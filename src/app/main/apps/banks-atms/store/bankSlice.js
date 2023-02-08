import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk(
  'banks/list/getProduct',
  async (productId) => {
    const response = await axios.get(`/api/banks/${productId}`)
    const data = await response.data

    return data === undefined ? null : data
  }
)

export const removeProduct = createAsyncThunk(
  'banks/list/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().banks.list
    await axios.delete(`/api/banks/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'banks/list/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().banks.list

    if (id) {
      const response = await axios.post(`/api/banks/${id}`, {
        ...productData,
        _method: 'PATCH',
      })
      const data = await response.data
      return data
    }
    const response = await axios.post('/api/banks', productData)
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'banks/list',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          bank_name: '',
          bank_description: '',
          bank_location_textual: '',
          bank_location_coords: '',
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

export const selectProduct = ({ banks }) => banks.list

export default productSlice.reducer
