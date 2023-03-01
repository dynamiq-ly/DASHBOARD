import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk(
  'electricities/cables/getProduct',
  async (productId) => {
    const response = await axios.get(`/api/electricity/${productId}`)
    const data = await response.data

    return data === undefined ? null : data
  }
)

export const removeProduct = createAsyncThunk(
  'electricities/cables/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().electricities.cables
    await axios.delete(`/api/electricity/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'electricities/cables/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().electricities.cables

    if (id) {
      const response = await axios.post(`/api/electricity/${id}`, {
        ...productData,
        _method: 'PATCH',
      })
      const data = await response.data
      return data
    }
    const response = await axios.post('/api/electricity', productData)
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'electricities/cables',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          ElectricityInstruction: '',
          Room: '',
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

export const selectProduct = ({ electricities }) => electricities.cables

export default productSlice.reducer
