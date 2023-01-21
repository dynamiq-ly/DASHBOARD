import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk(
  'connectivities/connection/getProduct',
  async (productId) => {
    const response = await axios.get(`/api/connectivity/${productId}`)
    const data = await response.data

    return data === undefined ? null : data
  }
)

export const removeProduct = createAsyncThunk(
  'connectivities/connection/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().connectivities.connection
    await axios.delete(`/api/connectivity/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'connectivities/connection/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().connectivities.connection

    if (id) {
      const response = await axios.post(`/api/connectivity/${id}`, {
        ...productData,
        _method: 'PATCH',
      })
      const data = await response.data
      return data
    }
    const response = await axios.post('/api/connectivity', productData)
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'connectivities/connection',
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

export const selectProduct = ({ connectivities }) => connectivities.connection

export default productSlice.reducer
