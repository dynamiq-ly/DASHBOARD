import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

function DisponibilyTab(props) {
  const methods = useFormContext()
  const { control } = methods

  return (
    <div className="mt-8 mb-16">
      <Controller
        name="visible"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Visibility</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="visible"
              label="Visibility"
              placeholder="Select Visibility"
              value={field.value}
              onChange={field.onChange}
            >
              <MenuItem value={0}>User won't be able to see</MenuItem>
              <MenuItem value={1}>user will be able to see</MenuItem>
            </Select>
          </FormControl>
        )}
      />
    </div>
  )
}

export default DisponibilyTab
