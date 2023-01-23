import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk('directories/phone/getProduct', async (productId) => {
  const response = await axios.get(`/api/directory/${productId}`)
  const data = await response.data

  return data === undefined ? null : data
})

export const removeProduct = createAsyncThunk(
  'directories/phone/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().directories.phone
    await axios.delete(`/api/directory/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'directories/phone/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().directories.phone

    if (id) {
      const response = await axios.post(`/api/directory/${id}`, {
        ...productData,
        _method: 'PATCH',
      })
      const data = await response.data
      return data
    }
    const response = await axios.post('/api/directory', productData)
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'directories/phone',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          phone_title: '',
          phone_instruction: '',
          phone_urgent: false,
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

export const selectProduct = ({ directories }) => directories.phone

export default productSlice.reducer
