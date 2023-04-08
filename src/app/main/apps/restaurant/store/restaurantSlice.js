import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk('restaurants/resto/getProduct', async (productId) => {
  const response = await axios.get(`/api/restaurant/${productId}`)
  const data = await response.data

  return data === undefined ? null : data
})

export const removeProduct = createAsyncThunk(
  'restaurants/resto/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().restaurants.resto
    await axios.delete(`/api/restaurant/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'restaurants/resto/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().restaurants.resto

    if (id) {
      const response = await axios.post(
        `/api/restaurant/${id}`,
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
      '/api/restaurant',
      {
        ...productData,
        ...productData.chefs,
        ...productData.schedule,
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
)

const productSlice = createSlice({
  name: 'restaurants/resto',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          restaurant_name: '',
          restaurant_website: '',
          restaurant_descripton: '',
          restaurant_opens: '',
          restaurant_closes: '',
          restaurant_location: '',
          restaurant_speciality: '',
          restaurant_status: 1,
          restaurant_capacity: 0,
          restaurant_can_book: 0,
          restaurant_booked_capacity: '0',
          images: [],
          restaurant_chef_exec_name: '',
          restaurant_chef_exec_image: 'R.jpg',
          restaurant_chef_name: '',
          restaurant_chef_image: 'R.jpg',
          sunday: null,
          monday: null,
          tuesday: null,
          wednesday: null,
          thursday: null,
          friday: null,
          saturday: null,
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

export const selectProduct = ({ restaurants }) => restaurants.resto

export default productSlice.reducer
