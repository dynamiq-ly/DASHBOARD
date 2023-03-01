import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk('roomService/foodsAE/getProduct', async (productId) => {
  const response = await axios.get(`api/room-service/food-service/${productId}`)
  const data = await response.data

  return data === undefined ? null : data
})

export const removeProduct = createAsyncThunk(
  'roomService/foodsAE/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().roomService.foodsAE
    await axios.delete(`api/room-service/food-service/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'roomService/foodsAE/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().roomService.foodsAE

    if (id) {
      const response = await axios.post(`api/room-service/food-service/${id}`, {
        ...productData,
        _method: 'PATCH',
      })
      const data = await response.data
      return data
    }
    const response = await axios.post('api/room-service/food-service', productData)
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'roomService/foodsAE',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          food_service_name: '',
          food_service_opens: '',
          food_service_closes: '',
          food_service_min_order: '',
          food_service_description: '',
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

export const selectProduct = ({ roomService }) => roomService.foodsAE

export default productSlice.reducer
