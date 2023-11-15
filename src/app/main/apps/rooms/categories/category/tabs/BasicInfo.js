import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import TextField from '@mui/material/TextField'

import { Controller, useFormContext } from 'react-hook-form'
import FuseSvgIcon from '@fuse/core/FuseSvgIcon/FuseSvgIcon'

function BasicInfoTab(props) {
  const methods = useFormContext()
  const { control } = methods

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
            label="Room Type"
            autoFocus
            id="label"
            variant="outlined"
            fullWidth
            helperText="Please specify the room type"
          />
        )}
      />

      <Controller
        name="visible"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth className="mt-8 mb-16">
            <InputLabel id="demo-simple-select-label">Visibilty on the app</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="visible"
              label="Visibility"
              placeholder="Select Visibility"
              value={field.value}
              onChange={field.onChange}
            >
              <MenuItem value={0} className="flex items-center gap-2">
                <FuseSvgIcon className="text-red" size={20}>
                  heroicons-outline:minus-circle
                </FuseSvgIcon>{' '}
                Not Visible
              </MenuItem>
              <MenuItem value={1} className="flex items-center gap-2">
                <FuseSvgIcon className="text-green" size={20}>
                  heroicons-outline:check-circle
                </FuseSvgIcon>{' '}
                Visible
              </MenuItem>
            </Select>
          </FormControl>
        )}
      />
    </div>
  )
}

export default BasicInfoTab
