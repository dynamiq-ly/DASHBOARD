import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk('laundries/addLaundry/getProduct', async (productId) => {
  const response = await axios.get(`/api/laundry/${productId}`)
  const data = await response.data

  return data === undefined ? null : data
})

export const removeProduct = createAsyncThunk(
  'laundries/addLaundry/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().laundries.addLaundry
    await axios.delete(`/api/laundry/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'laundries/addLaundry/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().laundries.addLaundry

    if (id) {
      const response = await axios.post(`/api/laundry/${id}`, {
        ...productData,
        _method: 'PATCH',
      })
      const data = await response.data
      return data
    }
    const response = await axios.post('/api/laundry', productData)
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'laundries/addLaundry',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          LaundryInstruction: '',
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

export const selectProduct = ({ laundries }) => laundries.addLaundry

export default productSlice.reducer
