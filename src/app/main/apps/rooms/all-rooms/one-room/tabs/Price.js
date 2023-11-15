import TextField from '@mui/material/TextField'

import { Controller, useFormContext } from 'react-hook-form'

function BasicInfoTab(props) {
  const methods = useFormContext()
  const { control } = methods

  return (
    <div>
      <Controller
        name="price"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Room Price"
            autoFocus
            id="price"
            type="number"
            variant="outlined"
            fullWidth
            helperText="Please specify the price of this room"
          />
        )}
      />
      <Controller
        name="config.upgrade-price"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Room Upgrade Price"
            autoFocus
            type="number"
            id="config.upgrade-price"
            variant="outlined"
            fullWidth
            helperText="Please specify the upgrade price of this room"
          />
        )}
      />
      <Controller
        name="config.downgrade-price"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Room Downgrade Price"
            type="number"
            autoFocus
            id="config.downgrade-price"
            variant="outlined"
            fullWidth
            helperText="Please specify the downgrade price of this room"
          />
        )}
      />
    </div>
  )
}

export default BasicInfoTab
