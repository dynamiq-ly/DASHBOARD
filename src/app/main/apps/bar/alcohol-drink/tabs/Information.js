import { TextField } from '@mui/material'
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
        name="slug"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="drink slug"
            autoFocus
            id="slug"
            variant="outlined"
            fullWidth
            helperText="Please specify the name of the Drink"
          />
        )}
      />

      {getValues('type') === 'glass' && (
        <Controller
          name="preperation"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              className="mt-8 mb-16"
              required
              label="Glass preperation"
              autoFocus
              multiline
              rows={4}
              id="preperation"
              variant="outlined"
              fullWidth
              helperText="Please specify the preparation of the Drink"
            />
          )}
        />
      )}

      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="drink description"
            autoFocus
            multiline
            rows={4}
            id="description"
            variant="outlined"
            fullWidth
            helperText="Please specify the preparation of the Drink"
          />
        )}
      />
    </div>
  )
}

export default CategoryTab
