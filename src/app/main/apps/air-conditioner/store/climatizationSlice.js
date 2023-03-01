import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk(
  'climatizations/clima/getProduct',
  async (productId) => {
    const response = await axios.get(`/api/air-conditionner/${productId}`)
    const data = await response.data

    return data === undefined ? null : data
  }
)

export const removeProduct = createAsyncThunk(
  'climatizations/clima/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().climatizations.clima
    await axios.delete(`/api/air-conditionner/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'climatizations/clima/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().climatizations.clima

    if (id) {
      const response = await axios.post(`/api/air-conditionner/${id}`, {
        ...productData,
        _method: 'PATCH',
      })
      const data = await response.data
      return data
    }
    const response = await axios.post('/api/air-conditionner', productData)
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'climatizations/clima',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          AirConditionnerInstruction: '',
          AirConditionnerWarning: '',
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

export const selectProduct = ({ climatizations }) => climatizations.clima

export default productSlice.reducer
