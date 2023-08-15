import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk(
  'gyms/equipement/getProduct',
  async (equipId, { dispatch, getState }) => {
    const response = await axios.get(`/api/gym/equipements/${equipId}`)
    const data = await response.data

    return data === undefined ? null : data
  }
)

export const removeProduct = createAsyncThunk(
  'gyms/equipement/removeProduct',
  async (val, { dispatch, getState }) => {
    const { id } = getState().gyms.equipement
    await axios.delete(`/api/gym/equipements/${id}`)
    return id
  }
)

export const saveProduct = createAsyncThunk(
  'gyms/equipement/saveProduct',
  async (productData, { dispatch, getState }) => {
    const { id } = getState().gyms.equipement

    if (id) {
      const response = await axios.post(
        `/api/gym/equipements/${id}`,
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
    const response = await axios.post('/api/gym/equipements', productData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    const data = await response.data
    return data
  }
)

const productSlice = createSlice({
  name: 'gyms/equipement',
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
          gym_id: '',
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

export const selectProduct = ({ gyms }) => gyms.equipement

export default productSlice.reducer
