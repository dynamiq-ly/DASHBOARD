import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk(
  'pooltowels/towelforpool/getProduct',
  async (productId) => {
    const response = await axios.get(`/api/pool-towels/${productId}`)
    const data = await response.data

    return data === undefined ? null : data
  }
)

export const removeProduct = createAsyncThunk(
  'pooltowels/towelforpool/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().pooltowels.towelforpool
    await axios.delete(`/api/pool-towels/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'pooltowels/towelforpool/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().pooltowels.towelforpool

    if (id) {
      const response = await axios.post(`/api/pool-towels/${id}`, {
        ...productData,
        _method: 'PATCH',
      })
      const data = await response.data
      return data
    }
    const response = await axios.post('/api/pool-towels', productData)
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'pooltowels/towelforpool',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          PoolTowelsInstruction: '',
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

export const selectProduct = ({ pooltowels }) => pooltowels.towelforpool

export default productSlice.reducer
