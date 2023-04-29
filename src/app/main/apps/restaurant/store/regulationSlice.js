import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk(
  'restaurantFacility/regulation/getProduct',
  async (regulationId, { dispatch, getState }) => {
    const response = await axios.get(`/api/restaurant/regulations/${regulationId}`)
    const data = await response.data

    return data === undefined ? null : data
  }
)

export const removeProduct = createAsyncThunk(
  'restaurantFacility/regulation/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().restaurantFacility.regulation
    await axios.delete(`/api/restaurant/regulations/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'restaurantFacility/regulation/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().restaurantFacility.regulation

    if (id) {
      const response = await axios.post(
        `/api/restaurant/regulations/${id}`,
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
    const response = await axios.post('/api/restaurant/regulations', productData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'restaurantFacility/regulation',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          regulation_name: '',
          regulation_description: '',
          regulation_images: [],
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

export const selectProduct = ({ restaurantFacility }) => restaurantFacility.regulation

export default productSlice.reducer
