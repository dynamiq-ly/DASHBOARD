import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk('interestPoints/point/getProduct', async (productId) => {
  const response = await axios.get(`/api/point-of-interest/${productId}`)
  const data = await response.data

  return data === undefined ? null : data
})

export const removeProduct = createAsyncThunk(
  'interestPoints/point/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().interestPoints.point
    await axios.delete(`/api/point-of-interest/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'interestPoints/point/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().interestPoints.point

    if (id) {
      const response = await axios.post(`/api/point-of-interest/${id}`, {
        ...productData,
        ...productData.schedule,
        _method: 'PATCH',
      })
      const data = await response.data
      return data
    }
    const response = await axios.post(
      '/api/point-of-interest',
      { ...productData, ...productData.schedule },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'interestPoints/point',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          name: '',
          location: '',
          coordinates: '',
          phone: '',
          website: '',
          description: '',
          visible: 1,
          point_id: '',
          images: [],
          sunday: '',
          monday: '',
          tuesday: '',
          wednesday: '',
          thursday: '',
          friday: '',
          saturday: '',
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

export const selectProduct = ({ interestPoints }) => interestPoints.point

export default productSlice.reducer
