import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk(
  'rooms/category/getProduct',
  async (productId) => {
    const response = await axios.get(`/api/rooms/room-category/${productId}`)
    const data = await response.data

    return data === undefined ? null : data
  }
)

export const removeProduct = createAsyncThunk(
  'rooms/category/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().rooms.category
    await axios.delete(`/api/rooms/room-category/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'rooms/category/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().rooms.category

    if (id) {
      const response = await axios.post(`/api/rooms/room-category/${id}`, {
        ...productData,
        _method: 'PATCH',
      })
      const data = await response.data
      return data
    }
    const response = await axios.post('/api/rooms/room-category', productData)
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'rooms/category',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          pool_type: '',
          pool_image: '',
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

export const selectProduct = ({ rooms }) => rooms.category

export default productSlice.reducer
