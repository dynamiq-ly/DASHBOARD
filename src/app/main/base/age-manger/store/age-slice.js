import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk(
  'gyms/gym/getProduct',
  async (gymId, { dispatch, getState }) => {
    const response = await axios.get(`/api/gym/${gymId}`)
    const data = await response.data

    return data === undefined ? null : data
  }
)

export const removeProduct = createAsyncThunk(
  'gyms/gym/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().gyms.gym
    await axios.delete(`/api/gym/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'gyms/gym/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().gyms.gym

    if (id) {
      const response = await axios.post(`/api/gym/${id}`, {
        ...productData,
        _method: 'PATCH',
      })
      const data = await response.data
      return data
    }
    const response = await axios.post('/api/gym', productData)
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'gyms/gym',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          name: '',
          image: '',
          location: '',
          terms: null,
          description: '',
          'timing-open': '',
          'timing-close': '',
          reservation: 0,
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

export const selectProduct = ({ gyms }) => gyms.gym

export default productSlice.reducer
