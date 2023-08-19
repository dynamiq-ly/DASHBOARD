import { Autocomplete, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
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
    if (getValues('type') === 'soft') setValue('categories', '')
  }, [setValue, getValues])

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
            label="Staff name"
            autoFocus
            id="name"
            variant="outlined"
            fullWidth
            helperText="Please specify the name of the staff"
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
              <MenuItem value="soft" className="flex items-center gap-2">
                Soft Drinks
              </MenuItem>
              <MenuItem value="alcohol" className="flex items-center gap-2">
                Alcohol Drinks
              </MenuItem>
            </Select>
          </FormControl>
        )}
      />

      {getValues('type') === 'alcohol' && (
        <Controller
          name="categories"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Autocomplete
              className="mt-8 mb-16"
              multiple
              freeSolo
              value={value && JSON.parse(value) || ""}
              options={[]}
              onChange={(event, newValue) => {
                onChange(JSON.stringify(newValue))
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  className="mt-8 mb-16"
                  placeholder="Insert Categories"
                  label="Categories"
                  variant="outlined"
                  helperText="Please specify the categories of the menu, to keep inserting press enter."
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              )}
            />
          )}
        />
      )}
    </div>
  )
}

export default CategoryTab
