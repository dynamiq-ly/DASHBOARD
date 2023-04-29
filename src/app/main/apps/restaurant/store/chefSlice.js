import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk(
  'restaurantFacility/chef/getProduct',
  async (chefId, { dispatch, getState }) => {
    const response = await axios.get(`/api/restaurant/chef/${chefId}`)
    const data = await response.data

    return data === undefined ? null : data
  }
)

export const removeProduct = createAsyncThunk(
  'restaurantFacility/chef/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().restaurantFacility.chef
    await axios.delete(`/api/restaurant/chef/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'restaurantFacility/chef/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().restaurantFacility.chef

    if (id) {
      const response = await axios.post(
        `/api/restaurant/chef/${id}`,
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
    const response = await axios.post('/api/restaurant/chef', productData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'restaurantFacility/chef',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          chef_name: '',
          chef_image: '',
          restaurant_id: '',
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

export const selectProduct = ({ restaurantFacility }) => restaurantFacility.chef

export default productSlice.reducer
