import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios'
import { useEffect, useLayoutEffect, useState } from 'react'

import { Controller, useFormContext } from 'react-hook-form'
import { useParams } from 'react-router-dom'

function CategoryTab(props) {
  const methods = useFormContext()
  const { control, setValue, getValues } = methods
  const [categories, setCategories] = useState('')

  const { menuId } = useParams()

  useLayoutEffect(() => {
    setValue('drink_id', menuId)
  }, [menuId, setValue])

  useEffect(() => {
    if (getValues('type') === 'glass') {
      setValue('small_price', 0)
    }
  }, [getValues, setValue])

  useLayoutEffect(() => {
    axios
      .get(`/api/bars/menu/${menuId}`)
      .then((response) => setCategories(response.data.categories))
  }, [categories, menuId])

  return (
    <div>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="drink name"
            autoFocus
            id="name"
            variant="outlined"
            fullWidth
            helperText="Please specify the name of the Drink"
          />
        )}
      />

      <Controller
        name="type"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="type"
              className="mt-8 mb-16"
              label="Categories"
              value={field.value}
              onChange={field.onChange}
            >
              <MenuItem value="bottle" className="flex items-center gap-2">
                Bottle
              </MenuItem>
              <MenuItem value="glass" className="flex items-center gap-2">
                Glass
              </MenuItem>
            </Select>
          </FormControl>
        )}
      />

      <Controller
        name="price"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="drink price"
            autoFocus
            type="number"
            id="price"
            variant="outlined"
            fullWidth
            helperText="Please specify the price of the Drink"
          />
        )}
      />

      {getValues('type') === 'bottle' && (
        <Controller
          name="small_price"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              className="mt-8 mb-16"
              required
              label="drink small_price"
              type="number"
              autoFocus
              id="small_price"
              variant="outlined"
              fullWidth
              helperText="Please specify the small_price of the Drink"
            />
          )}
        />
      )}

      <Controller
        name="size"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Bootle Size"
            autoFocus
            id="size"
            variant="outlined"
            fullWidth
            helperText="Please specify the price of the Drink"
          />
        )}
      />

      {categories && (
        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="type"
                className="mt-8 mb-16"
                label="Categories"
                value={field.value}
                onChange={field.onChange}
              >
                {JSON.parse(categories).map((item, index) => (
                  <MenuItem key={index} value={item} className="flex items-center gap-2">
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        />
      )}
    </div>
  )
}

export default CategoryTab
