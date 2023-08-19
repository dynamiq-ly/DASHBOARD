import { Autocomplete, TextField } from '@mui/material'
import { useLayoutEffect } from 'react'

import { Controller, useFormContext } from 'react-hook-form'
import { useParams } from 'react-router-dom'

function CategoryTab(props) {
  const methods = useFormContext()
  const { control, setValue } = methods

  const { menuId } = useParams()

  useLayoutEffect(() => {
    setValue('drink_id', menuId)
  }, [menuId, setValue])

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
            label="Drink name"
            autoFocus
            id="name"
            variant="outlined"
            fullWidth
            helperText="Please specify the name of the drink"
          />
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
            label="Drink Price"
            autoFocus
            id="price"
            type="number"
            variant="outlined"
            fullWidth
            helperText="Please specify the Price of the drink"
          />
        )}
      />

      <Controller
        name="ingredients"
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
