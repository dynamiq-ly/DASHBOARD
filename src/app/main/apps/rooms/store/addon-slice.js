import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk('rooms/addon/getProduct', async (productId) => {
  const response = await axios.get(`/api/rooms/addons/${productId}`)
  const data = await response.data

  return data === undefined ? null : data
})

export const removeProduct = createAsyncThunk(
  'rooms/addon/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().rooms.addon
    await axios.delete(`/api/rooms/addons/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'rooms/addon/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().rooms.addon

    if (id) {
      const response = await axios.post(
        `/api/rooms/addons/${id}`,
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
    const response = await axios.post('/api/rooms/addons', productData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'rooms/addon',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          label: '',
          image: '',
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

export const selectProduct = ({ rooms }) => rooms.addon

export default productSlice.reducer
