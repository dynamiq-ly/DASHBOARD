import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk(
  'ages/age/getProduct',
  async (ageId, { dispatch, getState }) => {
    const response = await axios.get(`/api/helpers/age-manager/${ageId}`)
    const data = await response.data

    return data === undefined ? null : data
  }
)

export const removeProduct = createAsyncThunk(
  'ages/age/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().ages.age
    await axios.delete(`/api/helpers/age-manager/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'ages/age/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().ages.age

    if (id) {
      const response = await axios.post(`/api/helpers/age-manager/${id}`, {
        ...productData,
        _method: 'PATCH',
      })
      const data = await response.data
      return data
    }
    const response = await axios.post('/api/helpers/age-manager', productData)
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'ages/age',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          age: '',
          age_group: '',
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

export const selectProduct = ({ ages }) => ages.age

export default productSlice.reducer
