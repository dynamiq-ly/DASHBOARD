import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk(
  'towels/roomtowel/getProduct',
  async (productId) => {
    const response = await axios.get(`/api/towels/${productId}`)
    const data = await response.data

    return data === undefined ? null : data
  }
)

export const removeProduct = createAsyncThunk(
  'towels/roomtowel/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().towels.roomtowel
    await axios.delete(`/api/towels/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'towels/roomtowel/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().towels.roomtowel

    if (id) {
      const response = await axios.post(`/api/towels/${id}`, {
        ...productData,
        _method: 'PATCH',
      })
      const data = await response.data
      return data
    }
    const response = await axios.post('/api/towels', productData)
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'towels/roomtowel',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          TowelsInstruction: '',
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

export const selectProduct = ({ towels }) => towels.roomtowel

export default productSlice.reducer
