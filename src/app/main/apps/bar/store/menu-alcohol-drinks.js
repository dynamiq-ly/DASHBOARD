import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk('bars/alcohol/getProduct', async (productId) => {
  const response = await axios.get(`/api/bars/menu/alcohol-drinks/${productId}`)
  const data = await response.data

  return data === undefined ? null : data
})

export const removeProduct = createAsyncThunk(
  'bars/alcohol/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().bars.alcohol
    await axios.delete(`/api/bars/menu/alcohol-drinks/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'bars/alcohol/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().bars.alcohol

    if (id) {
      const response = await axios.post(
        `/api/bars/menu/alcohol-drinks/${id}`,
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
    const response = await axios.post('/api/bars/menu/alcohol-drinks', productData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'bars/alcohol',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          name: '',
          image: '',
          size: '',
          price: '',
          small_price: 0,
          category: '',
          type: '',

          served_slug: '',
          served_with: '',

          slug: '',
          preperation: '',
          description: '',

          features: [],

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

export const selectProduct = ({ bars }) => bars.alcohol

export default productSlice.reducer
