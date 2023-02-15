import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk('agencies/agency/getProduct', async (productId) => {
  const response = await axios.get(`/api/tour-operator/agency/${productId}`)
  const data = await response.data

  return data === undefined ? null : data
})

export const removeProduct = createAsyncThunk(
  'agencies/agency/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().agencies.agency
    await axios.delete(`/api/agencies/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'agencies/agency/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().agencies.agency

    if (id) {
      const response = await axios.post(`/api/tour-operator/agency/${id}`, {
        ...productData,
        _method: 'PATCH',
      })
      const data = await response.data
      return data
    }
    const response = await axios.post('/api/tour-operator/agency', productData)
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'agencies/agency',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          agency_title: '',
          agency_summary: '',
          agency_description: '',
          agency_website: '',
          agency_image: '',
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

export const selectProduct = ({ agencies }) => agencies.agency

export default productSlice.reducer
