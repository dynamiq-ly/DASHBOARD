import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk(
  'gyms/staff/getProduct',
  async (chefId, { dispatch, getState }) => {
    const response = await axios.get(`/api/gym/staff/${chefId}`)
    const data = await response.data

    return data === undefined ? null : data
  }
)

export const removeProduct = createAsyncThunk(
  'gyms/staff/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().gyms.staff
    await axios.delete(`/api/gym/staff/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'gyms/staff/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().gyms.staff

    if (id) {
      const response = await axios.post(
        `/api/gym/staff/${id}`,
        {
          ...productData,
          _method: 'PATCH',
        },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )
      const data = await response.data
      return data
    }
    const response = await axios.post('/api/gym/staff', productData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'gyms/staff',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          name: '',
          job_title: '',
          image: '',
          gym_id: '',
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

export const selectProduct = ({ gyms }) => gyms.staff

export default productSlice.reducer
