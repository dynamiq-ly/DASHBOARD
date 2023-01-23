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
      const response = await axios.post(`/api/restaurant/${id}`, {
        ...productData,
        _method: 'PATCH',
      })
      const data = await response.data
      return data
    }
    const response = await axios.post('/api/restaurant', productData)
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
          connectivity_name: '',
          connectivity_password: '',
          connectivity_state: false,
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
