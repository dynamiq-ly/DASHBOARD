import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk(
  'locations/location/getProduct',
  async (locationId, { dispatch, getState }) => {
    const response = await axios.get(`/api/helpers/location-manager/${locationId}`)
    const data = await response.data

    return data === undefined ? null : data
  }
)

export const removeProduct = createAsyncThunk(
  'locations/location/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().locations.location
    await axios.delete(`/api/helpers/location-manager/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'locations/location/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().locations.location

    if (id) {
      const response = await axios.post(`/api/helpers/location-manager/${id}`, {
        ...productData,
        _method: 'PATCH',
      })
      const data = await response.data
      return data
    }
    const response = await axios.post('/api/helpers/location-manager', productData)
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'locations/location',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          label: '',
          belongToHotel: 1,
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

export const selectProduct = ({ locations }) => locations.location

export default productSlice.reducer
