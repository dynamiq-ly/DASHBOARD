import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk('bars/menu/getProduct', async (productId) => {
  const response = await axios.get(`/api/bars/menu/${productId}`)
  const data = await response.data

  return data === undefined ? null : data
})

export const removeProduct = createAsyncThunk(
  'bars/menu/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().bars.menu
    await axios.delete(`/api/bars/menu/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'bars/menu/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().bars.menu

    if (id) {
      const response = await axios.post(
        `/api/bars/menu/${id}`,
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
    const response = await axios.post('/api/bars/menu', productData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'bars/menu',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          name: '',
          type: '',
          categories: '',
          bar_id: '',
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

export const selectProduct = ({ bars }) => bars.menu

export default productSlice.reducer
