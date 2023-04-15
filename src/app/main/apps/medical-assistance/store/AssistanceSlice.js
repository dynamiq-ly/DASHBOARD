import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk(
  'medicalmeasures/medical/getProduct',
  async (productId) => {
    const response = await axios.get(`/api/medical-assistance/${productId}`)
    const data = await response.data

    return data === undefined ? null : data
  }
)

export const removeProduct = createAsyncThunk(
  'medicalmeasures/medical/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().medicalmeasures.medical
    await axios.delete(`/api/medical-assistance/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'medicalmeasures/medical/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().medicalmeasures.medical

    const response = await axios.post(`/api/medical-assistance/${id}`, {
      ...productData,
      _method: 'PATCH',
    })
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'medicalmeasures/medical',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          request: '',
          description: '',
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

export const selectProduct = ({ medicalmeasures }) => medicalmeasures.medical

export default productSlice.reducer
