import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk(
  'incidence/report/getProduct',
  async (productId) => {
    const response = await axios.get(`/api/report-incident/${productId}`)
    const data = await response.data

    return data === undefined ? null : data
  }
)

export const removeProduct = createAsyncThunk(
  'incidence/report/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().incidence.report
    await axios.delete(`/api/report-incident/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'incidence/report/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().incidence.report

    if (id) {
      const response = await axios.post(`/api/report-incident/${id}`, {
        ...productData,
        _method: 'PATCH',
      })
      const data = await response.data
      return data
    }
    const response = await axios.post('/api/report-incident', productData)
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'incidence/report',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          IncidentType: '',
          IncidentLocation: '',
          IncidentDate: '',
          IncidentDexcription: '',
          IsAnswered: 0,
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

export const selectProduct = ({ incidence }) => incidence.report

export default productSlice.reducer
