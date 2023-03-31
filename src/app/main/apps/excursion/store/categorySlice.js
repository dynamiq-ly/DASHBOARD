import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk(
  'categories/activity/getProduct',
  async (productId) => {
    const response = await axios.get(`/api/excursion/activities/${productId}`)
    const data = await response.data

    return data === undefined ? null : data
  }
)

export const removeProduct = createAsyncThunk(
  'categories/activity/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().categories.activity
    await axios.delete(`/api/excursion/activities/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'categories/activity/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().categories.activity

    if (id) {
      const response = await axios.post(
        `/api/excursion/activities/${id}`,
        {
          ...productData,
          _method: 'PATCH',
        },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )
      const data = await response.data
      return data
    }
    const response = await axios.post(
      '/api/excursion/activities',
      productData,
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
  name: 'categories/activity',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          activity_name: '',
          activity_image: '',
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

export const selectProduct = ({ categories }) => categories.activity

export default productSlice.reducer
