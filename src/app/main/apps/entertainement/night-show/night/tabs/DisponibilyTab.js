import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

function DisponibilyTab(props) {
  const methods = useFormContext()
  const { control } = methods

  return (
    <div>
      <Controller
        name="isVisible"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth className="mt-8 mb-16">
            <InputLabel id="demo-simple-select-label">Visibility</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="isVisible"
              label="Visibility"
              placeholder="Select Visibility"
              value={field.value}
              onChange={field.onChange}
            >
              <MenuItem value={0}>Disabled</MenuItem>
              <MenuItem value={1}>Enabled</MenuItem>
            </Select>
          </FormControl>
        )}
      />

      <Controller
        name="entertainement_joinable"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth className="mt-8 mb-16">
            <InputLabel id="demo-simple-select-label">Can People Join</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="entertainement_joinable"
              label="Can People Join"
              placeholder="Select Option"
              value={field.value}
              onChange={field.onChange}
            >
              <MenuItem value="NO">NO</MenuItem>
              <MenuItem value="YES">YES</MenuItem>
              <MenuItem value="DEPENDS">DEPENDS</MenuItem>
            </Select>
          </FormControl>
        )}
      />
    </div>
  )
}

export default DisponibilyTab
