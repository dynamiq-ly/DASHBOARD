import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import TextField from '@mui/material/TextField'

import { Controller, useFormContext } from 'react-hook-form'

function BasicInfoTab(props) {
  const methods = useFormContext()
  const { control } = methods

  return (
    <div>
      <Controller
        name="drink_drink_category"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Category Type"
            autoFocus
            id="drink_drink_category"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="drink_drink_type"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Categroy</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="drink_drink_type"
              label="Type"
              value={field.value}
              onChange={field.onChange}
            >
              <MenuItem value="SOFT">SOFT</MenuItem>
              <MenuItem value="ALCOHOL">ALCOHOL</MenuItem>
            </Select>
          </FormControl>
        )}
      />
    </div>
  )
}

export default BasicInfoTab
