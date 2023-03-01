import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk('interestPoints/point/getProduct', async (productId) => {
  const response = await axios.get(`/api/point-of-interest/${productId}`)
  const data = await response.data

  return data === undefined ? null : data
})

export const removeProduct = createAsyncThunk(
  'interestPoints/point/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().interestPoints.point
    await axios.delete(`/api/point-of-interest/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'interestPoints/point/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().interestPoints.point

    if (id) {
      const response = await axios.post(`/api/point-of-interest/${id}`, {
        ...productData,
        _method: 'PATCH',
      })
      const data = await response.data
      return data
    }
    const response = await axios.post('/api/point-of-interest', productData)
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'interestPoints/point',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          point_title: '',
          point_small_summary: '',
          point_contact_number: '',
          point_website_information: '',
          point_textual_location: '',
          point_cords_location: '',
          point_recommended_visit: '',
          point_description: '',
          images: [],
          point_status: 0,
          point_interest_types_id: '',
          sunday: null,
          monday: null,
          tuesday: null,
          wednesday: null,
          thursday: null,
          friday: null,
          saturday: null,
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

export const selectProduct = ({ interestPoints }) => interestPoints.point

export default productSlice.reducer
