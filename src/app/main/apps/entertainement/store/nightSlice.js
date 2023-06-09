import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk(
  'entertainements/night/getProduct',
  async (productId) => {
    const response = await axios.get(`/api/entertainement/night-shows/${productId}`)
    const data = await response.data

    return data === undefined ? null : data
  }
)

export const removeProduct = createAsyncThunk(
  'entertainements/night/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().entertainements.night
    await axios.delete(`/api/entertainement/night-shows/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'entertainements/night/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().entertainements.night

    if (id) {
      const response = await axios.post(
        `/api/entertainement/night-shows/${id}`,
        {
          ...productData,
          ...productData.show,
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
      '/api/entertainement/night-shows',
      {
        ...productData,
        ...productData.show,
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
)

const productSlice = createSlice({
  name: 'entertainements/night',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          //   id: FuseUtils.generateGUID(),
          entertainement_name: '',
          entertainement_summary: '',
          entertainement_description: '',
          entertainement_type: 'NIGHT',
          entertainement_age: '',
          entertainement_location: '',
          entertainement_joinable: '',
          isVisible: 0,
          images: [],
          date: '',
          time_start: '',
          time_end: '',
          is_repetetive: 0,
          show: {
            night_show_price: 0,
            night_show_tickets: 0,
            night_show_link: '',
            night_show_video: '',
            night_show_genre: '',
            night_show_performers: '',
          },
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

export const selectProduct = ({ entertainements }) => entertainements.night

export default productSlice.reducer
