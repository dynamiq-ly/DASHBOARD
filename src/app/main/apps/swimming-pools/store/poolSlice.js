import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk('pools/pool/getProduct', async (productId) => {
  const response = await axios.get(`/api/swimming-pool/pools/${productId}`)
  const data = await response.data

  return data === undefined ? null : data
})

export const removeProduct = createAsyncThunk(
  'pools/pool/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().pools.pool
    await axios.delete(`/api/swimming-pool/pools/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'pools/pool/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().pools.pool

    if (id) {
      const response = await axios.post(
        `/api/swimming-pool/pools/${id}`,
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
    const response = await axios.post('/api/swimming-pool/pools', productData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'pools/pool',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          pool_name: '',
          pool_image: '',
          pool_description: '',
          pool_status: 0,
          pool_id: 0,
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

export const selectProduct = ({ pools }) => pools.pool

export default productSlice.reducer
