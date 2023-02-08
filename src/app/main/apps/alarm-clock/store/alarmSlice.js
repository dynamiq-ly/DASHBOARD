import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk('reminders/alarm/getProduct', async (productId) => {
  const response = await axios.get(`/api/reception/reminder/${productId}`)
  const data = await response.data

  return data === undefined ? null : data
})

export const removeProduct = createAsyncThunk(
  'reminders/alarm/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().reminders.alarm
    await axios.delete(`/api/reception/reminder/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'reminders/alarm/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().reminders.alarm

    const response = await axios.post(`/api/reception/reminder/${id}`, {
      ...productData,
      _method: 'PATCH',
    })
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'reminders/alarm',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          reminder_title: '',
          reminder_date: '',
          reminder_priority: '',
          isAnswered: false,
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

export const selectProduct = ({ reminders }) => reminders.alarm

export default productSlice.reducer
