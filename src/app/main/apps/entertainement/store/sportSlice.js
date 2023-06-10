import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk(
  'entertainements/sport/getProduct',
  async (productId) => {
    const response = await axios.get(`/api/entertainement/sport-events/${productId}`)
    const data = await response.data

    return data === undefined ? null : data
  }
)

export const removeProduct = createAsyncThunk(
  'entertainements/sport/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().entertainements.sport
    await axios.delete(`/api/entertainement/sport-events/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'entertainements/sport/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().entertainements.sport

    if (id) {
      const response = await axios.post(
        `/api/entertainement/sport-events/${id}`,
        {
          ...productData,
          ...productData.sport,
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
      '/api/entertainement/sport-events',
      {
        ...productData,
        ...productData.sport,
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
  name: 'entertainements/sport',
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
          entertainement_type: 'SPORT',
          entertainement_age: 'OTHER',
          entertainement_location: '',
          entertainement_joinable: 'YES',
          isVisible: 1,
          date: '',
          time_start: '',
          time_end: '',
          is_repetetive: 0,
          sport: {
            sport_type: '',
            sport_event: '',
            sport_event_image: 'https://wallpapercave.com/wp/wp3006044.png',
            sport_event_home_team: '',
            sport_event_home_image: '',
            sport_event_away_team: null,
            sport_event_away_image: null,
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

export const selectProduct = ({ entertainements }) => entertainements.sport

export default productSlice.reducer
