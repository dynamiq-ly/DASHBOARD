import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk('entertainements/day/getProduct', async (productId) => {
  const response = await axios.get(`/api/entertainement/day-activities/${productId}`)
  const data = await response.data

  return data === undefined ? null : data
})

export const removeProduct = createAsyncThunk(
  'entertainements/day/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().entertainements.day
    await axios.delete(`/api/entertainement/day-activities/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'entertainements/day/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().entertainements.day

    if (id) {
      const response = await axios.post(
        `/api/entertainement/day-activities/${id}`,
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
    const response = await axios.post('/api/entertainement/day-activities', productData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'entertainements/day',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          image: '',
          name: '',
          description: '',
          location: '',
          visible: 1,
          joinable: 0,
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

export const selectProduct = ({ entertainements }) => entertainements.day

export default productSlice.reducer
