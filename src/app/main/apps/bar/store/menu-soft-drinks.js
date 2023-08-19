import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk('bars/soft/getProduct', async (productId) => {
  const response = await axios.get(`/api/bars/menu/soft-drinks/${productId}`)
  const data = await response.data

  return data === undefined ? null : data
})

export const removeProduct = createAsyncThunk(
  'bars/soft/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().bars.soft
    await axios.delete(`/api/bars/menu/soft-drinks/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'bars/soft/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().bars.soft

    if (id) {
      const response = await axios.post(
        `/api/bars/menu/soft-drinks/${id}`,
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
    const response = await axios.post('/api/bars/menu/soft-drinks', productData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'bars/soft',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          name: '',
          price: 0,
          ingredients: '',
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

export const selectProduct = ({ bars }) => bars.soft

export default productSlice.reducer
