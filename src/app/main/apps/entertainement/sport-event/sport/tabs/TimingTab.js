import { TextField } from '@mui/material'

import { Controller, useFormContext } from 'react-hook-form'

function TimingTab(props) {
  const methods = useFormContext()
  const { control } = methods

  return (
    <div>
      <Controller
        name="day"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            autoFocus
            type="date"
            id="day"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="start_time"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            autoFocus
            type="time"
            id="start_time"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="end_time"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            autoFocus
            type="time"
            id="end_time"
            variant="outlined"
            fullWidth
          />
        )}
      />
    </div>
  )
}

export default TimingTab
