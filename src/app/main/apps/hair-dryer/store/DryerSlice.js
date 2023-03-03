import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk(
  'hairdryers/dryer/getProduct',
  async (productId) => {
    const response = await axios.get(`/api/hair-dryer/${productId}`)
    const data = await response.data

    return data === undefined ? null : data
  }
)

export const removeProduct = createAsyncThunk(
  'hairdryers/dryer/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().hairdryers.dryer
    await axios.delete(`/api/hair-dryer/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'hairdryers/dryer/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().hairdryers.dryer

    if (id) {
      const response = await axios.post(`/api/hair-dryer/${id}`, {
        ...productData,
        _method: 'PATCH',
      })
      const data = await response.data
      return data
    }
    const response = await axios.post('/api/hair-dryer', productData)
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'hairdryers/dryer',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          HairDryerInstruction: '',
          HairDryerWarning: '',
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

export const selectProduct = ({ hairdryers }) => hairdryers.dryer

export default productSlice.reducer
