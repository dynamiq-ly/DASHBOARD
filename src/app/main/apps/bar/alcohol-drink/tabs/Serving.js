import { Autocomplete, TextField } from '@mui/material'
import { useEffect, useLayoutEffect } from 'react'

import { Controller, useFormContext } from 'react-hook-form'
import { useParams } from 'react-router-dom'

function CategoryTab(props) {
  const methods = useFormContext()
  const { control, setValue, getValues } = methods

  const { productId } = useParams()

  useLayoutEffect(() => {
    setValue('bar_id', productId)
  }, [productId, setValue])

  useEffect(() => {
    if (getValues('type') === 'glass') {
      setValue('small_price', 0)
    }
  }, [getValues, setValue])

  return (
    <div>
      <Controller
        name="served_slug"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="drink served_slug"
            autoFocus
            multiline
            rows={2}
            id="served_slug"
            variant="outlined"
            fullWidth
            helperText="Please specify the preparation of the Drink"
          />
        )}
      />

      <Controller
        name="served_with"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Autocomplete
            className="mt-8 mb-16"
            multiple
            freeSolo
            value={value && JSON.parse(value)}
            options={[]}
            onChange={(event, newValue) => {
              onChange(JSON.stringify(newValue))
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                className="mt-8 mb-16"
                placeholder="Insert Ingredients"
                label="Ingredients"
                variant="outlined"
                helperText="Please specify the Ingredients of the drink, to keep inserting press enter."
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
          />
        )}
      />
    </div>
  )
}

export default CategoryTab
