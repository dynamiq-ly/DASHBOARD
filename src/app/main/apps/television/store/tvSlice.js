import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk(
  'televisions/tv/getProduct',
  async (productId) => {
    const response = await axios.get(`/api/television/${productId}`)
    const data = await response.data

    return data === undefined ? null : data
  }
)

export const removeProduct = createAsyncThunk(
  'televisions/tv/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().televisions.tv
    await axios.delete(`/api/television/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'televisions/tv/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().televisions.tv

    if (id) {
      const response = await axios.post(`/api/television/${id}`, {
        ...productData,
        _method: 'PATCH',
      })
      const data = await response.data
      return data
    }
    const response = await axios.post('/api/television', productData)
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'televisions/tv',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          tvInstruction: '',
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

export const selectProduct = ({ televisions }) => televisions.tv

export default productSlice.reducer
