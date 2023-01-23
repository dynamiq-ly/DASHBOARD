import TextField from '@mui/material/TextField'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

function BasicInfoTab(props) {
  const methods = useFormContext()
  const { control } = methods

  return (
    <div>
      <Controller
        name="mini_bar_item_name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Name"
            autoFocus
            id="mini_bar_item_name"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="mini_bar_item_price"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            id="mini_bar_item_price"
            label="Price"
            type="text"
            required
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="min_bar_item_type"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="min_bar_item_type"
              label="Type"
              value={field.value}
              onChange={field.onChange}
            >
              <MenuItem value="soft">SOFT</MenuItem>
              <MenuItem value="alcohol">ALCOHOL</MenuItem>
              <MenuItem value="snacks">SNACKS</MenuItem>
            </Select>
          </FormControl>
        )}
      />
    </div>
  )
}

export default BasicInfoTab
