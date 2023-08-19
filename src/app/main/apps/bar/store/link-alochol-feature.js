import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk('bars/feature/getProduct', async (productId) => {
  const response = await axios.get(`/api/bars/menu/alcohol-drinks/features/${productId}`)
  const data = await response.data

  return data === undefined ? null : data
})

export const removeProduct = createAsyncThunk(
  'bars/feature/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().bars.feature
    await axios.delete(`/api/bars/menu/alcohol-drinks/features/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'bars/feature/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().bars.feature

    if (id) {
      const response = await axios.post(
        `/api/bars/menu/alcohol-drinks/features/${id}`,
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
    const response = await axios.post('/api/bars/menu/alcohol-drinks/features', productData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'bars/feature',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          label: '',
          value: '',
          image: '',
          drink_id: '',
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

export const selectProduct = ({ bars }) => bars.feature

export default productSlice.reducer
