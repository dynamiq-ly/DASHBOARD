import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk(
  'restaurants/regulation/getProduct',
  async (productId) => {
    const response = await axios.get(`/api/restaurant/regulations/${productId}`)
    const data = await response.data

    return data === undefined ? null : data
  }
)

export const removeProduct = createAsyncThunk(
  'restaurants/regulation/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().restaurants.regulation
    await axios.delete(`/api/restaurant/regulations/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'restaurants/regulation/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().restaurants.regulation

    if (id) {
      const response = await axios.post(`/api/restaurant/regulations/${id}`, {
        ...productData,
        _method: 'PATCH',
      })
      const data = await response.data
      return data
    }
    const response = await axios.post('/api/restaurant/regulations', productData)
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'restaurants/regulation',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          restaurant_regulations_name: '',
          restaurant_regulations_description: '',
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

export const selectProduct = ({ restaurants }) => restaurants.regulation

export default productSlice.reducer
