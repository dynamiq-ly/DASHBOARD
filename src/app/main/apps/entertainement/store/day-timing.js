import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk(
  'entertainements/dayTiming/getProduct',
  async (productId) => {
    const response = await axios.get(`/api/entertainement/day-activities/timing/${productId}`)
    const data = await response.data

    return data === undefined ? null : data
  }
)

export const removeProduct = createAsyncThunk(
  'entertainements/dayTiming/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().entertainements.dayTiming
    await axios.delete(`/api/entertainement/day-activities/timing/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'entertainements/dayTiming/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().entertainements.dayTiming

    if (id) {
      const response = await axios.post(
        `/api/entertainement/day-activities/timing/${id}`,
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
    const response = await axios.post('/api/entertainement/day-activities/timing', productData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'entertainements/dayTiming',
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

export const selectProduct = ({ entertainements }) => entertainements.dayTiming

export default productSlice.reducer
