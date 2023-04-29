import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk(
  'restaurantFacility/restaurant/getProduct',
  async (productId) => {
    const response = await axios.get(`/api/restaurant/${productId}`)
    const data = await response.data

    return data === undefined ? null : data
  }
)

export const removeProduct = createAsyncThunk(
  'restaurantFacility/restaurant/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().restaurantFacility.restaurant
    await axios.delete(`/api/restaurant/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'restaurantFacility/restaurant/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().restaurantFacility.restaurant

    if (id) {
      const response = await axios.post(
        `/api/restaurant/${id}`,
        {
          ...productData,
          ...productData.images,
          ...productData.booking,
          ...productData.schedule,
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
      '/api/restaurant',
      { ...productData, ...productData.images, ...productData.booking, ...productData.schedule },
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
  name: 'restaurantFacility/restaurant',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          restaurant_name: '',
          restaurant_description: '',
          restaurant_email: '',
          restaurant_phone: '',
          restaurant_website: '',
          restaurant_location: '',
          restaurant_position: '',
          isVisible: 0,
          images: [],
          booking: {
            can_book: 0,
            booking_capacity: 0,
            booking_terms: '',
          },
          schedule: {
            isBuffet: 0,
            sunday: null,
            monday: null,
            tuesday: null,
            wednesday: null,
            thursday: null,
            friday: null,
            saturday: null,
          },
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

export const selectProduct = ({ restaurantFacility }) => restaurantFacility.restaurant

export default productSlice.reducer
