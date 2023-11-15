import { Autocomplete, TextField } from '@mui/material'
import { useLayoutEffect, useState } from 'react'

import { Controller, useFormContext } from 'react-hook-form'
import { useParams } from 'react-router-dom'

function CategoryTab(props) {
  const methods = useFormContext()
  const { control, setValue } = methods
  const [data, setData] = useState(undefined)

  const { productId } = useParams()

  useLayoutEffect(() => {
    setValue('room_id', productId)
  }, [productId, setValue])

  return (
    <div>
      <Controller
        name="label"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Label"
            autoFocus
            id="label"
            variant="outlined"
            fullWidth
            helperText="This is a required field"
          />
        )}
      />

      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Description"
            autoFocus
            multiline
            rows={5}
            id="description"
            variant="outlined"
            fullWidth
            helperText="This is a required field"
          />
        )}
      />

      <Controller
        name="keys"
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
                placeholder="Select Variance"
                label="plate variance"
                variant="outlined"
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
