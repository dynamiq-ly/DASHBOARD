import TextField from '@mui/material/TextField'

import { Controller, useFormContext } from 'react-hook-form'

function BasicInfoTab(props) {
  const methods = useFormContext()
  const { control } = methods

  return (
    <div>
      <Controller
        name="timing_open"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            autoFocus
            label="Timing Open"
            type="time"
            id="timing_open"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="timing_close"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            autoFocus
            label="Timing Close"
            type="time"
            id="timing_close"
            variant="outlined"
            fullWidth
          />
        )}
      />
    </div>
  )
}

export default BasicInfoTab
