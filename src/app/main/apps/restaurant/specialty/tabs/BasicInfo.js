import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import TextField from '@mui/material/TextField'
import { useEffect } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { useParams } from 'react-router-dom'

function BasicInfoTab(props) {
  const methods = useFormContext()
  const { control, setValue } = methods

  const { productId } = useParams()

  useEffect(() => {
    setValue('restaurant_id', productId)
  }, [productId, setValue])

  return (
    <div>
      <Controller
        name="restaurant_id"
        control={control}
        render={({ field }) => (
          <TextField {...field} className="hidden" required id="restaurant_id" />
        )}
      />

      <Controller
        name="speciality_name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Specialty"
            autoFocus
            id="speciality_name"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="speciality_main"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth className="mt-8 mb-16">
            <InputLabel id="demo-simple-select-label">Main Speciality</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="speciality_main"
              label="Main Speciality"
              placeholder="Select Visibility"
              value={field.value}
              onChange={field.onChange}
            >
              <MenuItem value={0}>
                This Restaurant will sepcialize in making this type of food and other types of food
              </MenuItem>
              <MenuItem value={1}>
                This Restaurant will sepcialize in making this type of food
              </MenuItem>
            </Select>
          </FormControl>
        )}
      />
    </div>
  )
}

export default BasicInfoTab
