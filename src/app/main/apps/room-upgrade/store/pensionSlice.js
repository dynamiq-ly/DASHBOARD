import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk(
  'pensionUpgrade/pension/getProduct',
  async (productId) => {
    const response = await axios.get(`/api/pension/${productId}`)
    const data = await response.data

    return data === undefined ? null : data
  }
)

export const removeProduct = createAsyncThunk(
  'pensionUpgrade/pension/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().pensionUpgrade.pension
    await axios.delete(`/api/pension/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'pensionUpgrade/pension/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().pensionUpgrade.pension

    if (id) {
      const response = await axios.post(
        `/api/pension/${id}`,
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
    const response = await axios.post('/api/pension', productData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'pensionUpgrade/pension',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          pension_name: '',
          pension_price: 0,
          pension_price_kids: 0,
          pension_description: '',
          pension_image: '',
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

export const selectProduct = ({ pensionUpgrade }) => pensionUpgrade.pension

export default productSlice.reducer
