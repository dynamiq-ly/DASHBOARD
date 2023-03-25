import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk('foodsService/plate/getProduct', async (productId) => {
  const response = await axios.get(`api/room-service/food-service/plate/supplement/${productId}`)
  const data = await response.data

  return data === undefined ? null : data
})

export const removeProduct = createAsyncThunk(
  'foodsService/plate/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().foodsService.plate
    await axios.delete(`api/room-service/food-service/plate/supplement/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'foodsService/plate/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().foodsService.plate

    if (id) {
      const response = await axios.post(`api/room-service/food-service/plate/supplement/${id}`, {
        ...productData,
        _method: 'PATCH',
      })
      const data = await response.data
      return data
    }
    const response = await axios.post('api/room-service/food-service/plate/supplement', productData)
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'foodsService/plate',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          supplement_name: '',
          supplement_price: '',
          food_service_plates_id: '',
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

export const selectProduct = ({ foodsService }) => foodsService.plate

export default productSlice.reducer
