import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk(
  'entertainements/sport/getProduct',
  async (productId) => {
    const response = await axios.get(`/api/entertainement/sport-programs/${productId}`)
    const data = await response.data

    return data === undefined ? null : data
  }
)

export const removeProduct = createAsyncThunk(
  'entertainements/sport/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().entertainements.sport
    await axios.delete(`/api/entertainement/sport-programs/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'entertainements/sport/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().entertainements.sport

    if (id) {
      const response = await axios.post(
        `/api/entertainement/sport-programs/${id}`,
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
      '/api/entertainement/sport-programs',
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
          lots_teams: 0,
          location: '',
          category: '',
          day: '',
          start_time: '',
          end_time: '',
          slug: '',
          banner_image: '',
          home_team_name: '',
          home_team_logo: '',
          away_team_name: '',
          away_team_logo: '',
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
