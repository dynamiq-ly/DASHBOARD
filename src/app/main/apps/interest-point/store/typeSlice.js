import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk(
  'pointsCategories/pointCategory/getProduct',
  async (productId) => {
    const response = await axios.get(`/api/point-of-interest/type/${productId}`)
    const data = await response.data

    return data === undefined ? null : data
  }
)

export const removeProduct = createAsyncThunk(
  'pointsCategories/pointCategory/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().pointsCategories.pointCategory
    await axios.delete(`/api/point-of-interest/type/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'pointsCategories/pointCategory/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().pointsCategories.pointCategory

    if (id) {
      const response = await axios.post(`/api/point-of-interest/type/${id}`, {
        ...productData,
        _method: 'PATCH',
      })
      const data = await response.data
      return data
    }
    const response = await axios.post('/api/point-of-interest/type', productData)
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'pointsCategories/pointCategory',
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

export const selectProduct = ({ pointsCategories }) => pointsCategories.pointCategory

export default productSlice.reducer
