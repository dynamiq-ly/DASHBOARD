import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk('pools/category/getProduct', async (productId) => {
  const response = await axios.get(`/api/swimming-pool/${productId}`)
  const data = await response.data

  return data === undefined ? null : data
})

export const removeProduct = createAsyncThunk(
  'pools/category/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().pools.category
    await axios.delete(`/api/swimming-pool/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'pools/category/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().pools.category

    if (id) {
      const response = await axios.post(
        `/api/swimming-pool/${id}`,
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
    const response = await axios.post('/api/swimming-pool', productData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'pools/category',
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

export const selectProduct = ({ pools }) => pools.category

export default productSlice.reducer
