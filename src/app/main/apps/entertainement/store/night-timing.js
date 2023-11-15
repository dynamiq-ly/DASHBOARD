import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk(
  'entertainements/nightTiming/getProduct',
  async (productId) => {
    const response = await axios.get(`/api/entertainement/night-shows/timing/${productId}`)
    const data = await response.data

    return data === undefined ? null : data
  }
)

export const removeProduct = createAsyncThunk(
  'entertainements/nightTiming/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().entertainements.nightTiming
    await axios.delete(`/api/entertainement/night-shows/timing/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'entertainements/nightTiming/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().entertainements.nightTiming

    if (id) {
      const response = await axios.post(
        `/api/entertainement/night-shows/timing/${id}`,
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
    const response = await axios.post('/api/entertainement/night-shows/timing', productData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'entertainements/nightTiming',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          age: '',
          day: '',
          time_start: '',
          time_end: '',
          et_id: '',
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

export const selectProduct = ({ entertainements }) => entertainements.nightTiming

export default productSlice.reducer
