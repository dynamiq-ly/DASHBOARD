import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk('roomService/category/getProduct', async (productId) => {
  const response = await axios.get(`api/room-service/drink-service/category/${productId}`)
  const data = await response.data

  return data === undefined ? null : data
})

export const removeProduct = createAsyncThunk(
  'roomService/category/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().roomService.category
    await axios.delete(`api/room-service/drink-service/category/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'roomService/category/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().roomService.category

    if (id) {
      const response = await axios.post(
        `api/room-service/drink-service/category/${id}`,
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
    const response = await axios.post('api/room-service/drink-service/category', productData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'roomService/category',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          drink_drink_category: '',
          drink_drink_type: '',
          drink_drink_image: '',
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

export const selectProduct = ({ roomService }) => roomService.category

export default productSlice.reducer
