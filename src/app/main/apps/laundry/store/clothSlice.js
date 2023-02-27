import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk('laundries/addMenu/getProduct', async (productId) => {
  const response = await axios.get(`/api/laundry-menu/${productId}`)
  const data = await response.data

  return data === undefined ? null : data
})

export const removeProduct = createAsyncThunk(
  'laundries/addMenu/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().laundries.addMenu
    await axios.delete(`/api/laundry-menu/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'laundries/addMenu/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().laundries.addMenu

    if (id) {
      const response = await axios.post(`/api/laundry-menu/${id}`, {
        ...productData,
        _method: 'PATCH',
      })
      const data = await response.data
      return data
    }
    const response = await axios.post('/api/laundry-menu', productData)
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'laundries/addMenu',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          clothes_type: '',
          laundry: 0,
          dry_cleaning: 0,
          pressing: 0,
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

export const selectProduct = ({ laundries }) => laundries.addMenu

export default productSlice.reducer
