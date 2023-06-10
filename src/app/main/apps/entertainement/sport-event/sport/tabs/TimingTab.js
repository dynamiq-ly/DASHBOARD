import TextField from '@mui/material/TextField'
import { Controller, useFormContext } from 'react-hook-form'

function TimingTab(props) {
  const methods = useFormContext()
  const { control } = methods

  return (
    <div>
      <Controller
        name="date"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            autoFocus
            id="date"
            type="date"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="time_start"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            autoFocus
            type="time"
            id="time_start"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="time_end"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            autoFocus
            type="time"
            id="time_end"
            variant="outlined"
            fullWidth
          />
        )}
      />
    </div>
  )
}

export default TimingTab
