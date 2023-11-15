import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk('rooms/room/getProduct', async (productId) => {
  const response = await axios.get(`/api/rooms/${productId}`)
  const data = await response.data

  return data === undefined ? null : data
})

export const removeProduct = createAsyncThunk(
  'rooms/room/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().rooms.room
    await axios.delete(`/api/rooms/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'rooms/room/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().rooms.room

    if (id) {
      const response = await axios.post(
        `/api/rooms/${id}`,
        {
          ...productData,
          ...productData.config,
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
    const response = await axios.post(
      '/api/rooms',
      { ...productData, ...productData.config },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'rooms/room',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          name: '',
          slug: '',
          price: 0,
          description: '',
          virtual: null,
          room_floor: '',
          room_number: '',
          room_id: '',
          images: [],
          visible: 1,
          booking: 0,
          'upgrade-price': 0,
          'downgrade-price': 0,
          'upgrade-description': '',
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

export const selectProduct = ({ rooms }) => rooms.room

export default productSlice.reducer
