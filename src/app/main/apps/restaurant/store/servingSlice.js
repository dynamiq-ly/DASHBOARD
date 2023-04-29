import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk(
  'restaurantFacility/serving/getProduct',
  async (servingId, { dispatch, getState }) => {
    const response = await axios.get(`/api/restaurant/serving/${servingId}`)
    const data = await response.data

    return data === undefined ? null : data
  }
)

export const removeProduct = createAsyncThunk(
  'restaurantFacility/serving/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().restaurantFacility.serving
    await axios.delete(`/api/restaurant/serving/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'restaurantFacility/serving/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().restaurantFacility.serving

    if (id) {
      const response = await axios.post(`/api/restaurant/serving/${id}`, {
        ...productData,
        _method: 'PATCH',
      })
      const data = await response.data
      return data
    }
    const response = await axios.post('/api/restaurant/serving', productData)
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'restaurantFacility/serving',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          serving_name: '',
          serving_description: '',
          serving_opens: '',
          serving_closes: '',
          restaurant_id: '',
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

export const selectProduct = ({ restaurantFacility }) => restaurantFacility.serving

export default productSlice.reducer
