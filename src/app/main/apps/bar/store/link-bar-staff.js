import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk('bars/staff/getProduct', async (productId) => {
  const response = await axios.get(`/api/bars/staff/${productId}`)
  const data = await response.data

  return data === undefined ? null : data
})

export const removeProduct = createAsyncThunk(
  'bars/staff/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().bars.staff
    await axios.delete(`/api/bars/staff/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'bars/staff/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().bars.staff

    if (id) {
      const response = await axios.post(
        `/api/bars/staff/${id}`,
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
    const response = await axios.post('/api/bars/staff', productData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'bars/staff',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          title: '',
          type: '',
          location: '',
          phone_number: '',
          description: '',

          timing_open: '',
          timing_close: '',

          menu_a_la_carte: null,

          reservation_required: 0,
          adults_only: 0,
          visible: 1,

          images: [],
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

export const selectProduct = ({ bars }) => bars.staff

export default productSlice.reducer
