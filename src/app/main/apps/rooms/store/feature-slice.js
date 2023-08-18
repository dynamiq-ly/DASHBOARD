import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk('rooms/feature/getProduct', async (productId) => {
  const response = await axios.get(`/api/rooms/features/${productId}`)
  const data = await response.data

  return data === undefined ? null : data
})

export const removeProduct = createAsyncThunk(
  'rooms/feature/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().rooms.feature
    await axios.delete(`/api/rooms/features/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'rooms/feature/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().rooms.feature

    if (id) {
      const response = await axios.post(
        `/api/rooms/features/${id}`,
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
    const response = await axios.post('/api/rooms/features', productData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'rooms/feature',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          label: '',
          description: '',
          keys: '',
          room_id: '',
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

export const selectProduct = ({ rooms }) => rooms.feature

export default productSlice.reducer
