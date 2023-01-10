import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMeasure = createAsyncThunk(
  'measures/safety/getMeasure',
  async (productId) => {
    const response = await axios.get(`/api/measures/${productId}`)
    const data = await response.data

    return data === undefined ? null : data
  }
)

export const removeMeasure = createAsyncThunk(
  'measures/safety/removeMeasure',
  async (val, { dispatch, getState }) => {
    const { id } = getState().eCommerceApp.product
    await axios.delete(`/api/measures/${id}`)
    return id
  }
)

export const saveMeasure = createAsyncThunk(
  'measures/safety/saveMeasure',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().eCommerceApp

    const response = await axios.put(`/api/measures/${id}`, productData)

    const data = await response.data

    return data
  }
)

const productSlice = createSlice({
  name: 'measures/safety',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          measure_name: '',
          measure_content: '',
          measure_icon: '',
        },
      }),
    },
  },
  extraReducers: {
    [getMeasure.fulfilled]: (state, action) => action.payload,
    [saveMeasure.fulfilled]: (state, action) => action.payload,
    [removeMeasure.fulfilled]: (state, action) => null,
  },
})

export const { newProduct, resetProduct } = productSlice.actions

export const selectProduct = ({ eCommerceApp }) => eCommerceApp.product

export default productSlice.reducer
