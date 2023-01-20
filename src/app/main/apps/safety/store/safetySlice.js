import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk('measures/safety/getProduct', async (productId) => {
  const response = await axios.get(`/api/measures/${productId}`)
  const data = await response.data

  return data === undefined ? null : data
})

export const removeProduct = createAsyncThunk(
  'measures/safety/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().measures.safety
    await axios.delete(`/api/measures/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'measures/safety/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().measures.safety

    if (id) {
      const response = await axios.post(`/api/measures/${id}`, {
        ...productData,
        _method: 'PATCH',
      })
      const data = await response.data
      return data
    }
    const response = await axios.post('/api/measures', productData)
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'measures/safety',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          measure_name: '',
          measure_content: '',
          measure_icon: '',
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

export const selectProduct = ({ measures }) => measures.safety

export default productSlice.reducer
