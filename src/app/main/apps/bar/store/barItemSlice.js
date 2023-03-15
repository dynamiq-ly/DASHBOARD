import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk('bars/item/getProduct', async (productId) => {
  const response = await axios.get(`/api/bar/${productId}`)
  const data = await response.data

  return data === undefined ? null : data
})

export const removeProduct = createAsyncThunk(
  'bars/item/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().bars.item
    await axios.delete(`/api/bar/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'bars/item/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().bars.item

    if (id) {
      const response = await axios.post(`/api/bar/${id}`, {
        ...productData,
        _method: 'PATCH',
      })
      const data = await response.data
      return data
    }
    const response = await axios.post('/api/bar', productData)
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'bars/item',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          connectivity_name: '',
          connectivity_password: '',
          connectivity_state: false,
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

export const selectProduct = ({ bars }) => bars.item

export default productSlice.reducer
