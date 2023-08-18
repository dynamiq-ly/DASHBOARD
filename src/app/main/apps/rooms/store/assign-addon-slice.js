import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk('rooms/assignAddon/getProduct', async (productId) => {
  const response = await axios.get(`api/rooms/link-addons-room/${productId}`)
  const data = await response.data

  return data === undefined ? null : data
})

export const removeProduct = createAsyncThunk(
  'rooms/assignAddon/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().rooms.assignAddon
    await axios.delete(`api/rooms/link-addons-room/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'rooms/assignAddon/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().rooms.assignAddon

    if (id) {
      const response = await axios.post(
        `api/rooms/link-addons-room/${id}`,
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
    const response = await axios.post('api/rooms/link-addons-room', productData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'rooms/assignAddon',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          featured: false,
          room_id: '',
          addon_id: '',
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

export const selectProduct = ({ rooms }) => rooms.assignAddon

export default productSlice.reducer
