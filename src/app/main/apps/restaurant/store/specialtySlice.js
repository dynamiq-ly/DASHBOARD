import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk(
  'restaurantFacility/specialty/getProduct',
  async (specialtyId, { dispatch, getState }) => {
    const response = await axios.get(`/api/restaurant/speciality/${specialtyId}`)
    const data = await response.data

    return data === undefined ? null : data
  }
)

export const removeProduct = createAsyncThunk(
  'restaurantFacility/specialty/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().restaurantFacility.specialty
    await axios.delete(`/api/restaurant/speciality/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'restaurantFacility/specialty/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().restaurantFacility.specialty

    if (id) {
      const response = await axios.post(`/api/restaurant/speciality/${id}`, {
        ...productData,
        _method: 'PATCH',
      })
      const data = await response.data
      return data
    }
    const response = await axios.post('/api/restaurant/speciality', productData)
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'restaurantFacility/specialty',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          speciality_name: '',
          speciality_main: 0,
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

export const selectProduct = ({ restaurantFacility }) => restaurantFacility.specialty

export default productSlice.reducer
