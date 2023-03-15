import TextField from '@mui/material/TextField'
import { Controller, useFormContext } from 'react-hook-form'

function WeeklyThemes(props) {
  const methods = useFormContext()
  const { control } = methods

  return (
    <div>
      <Controller
        name="bar_closed_days"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="Closed Days"
            autoFocus
            id="bar_closed_days"
            variant="outlined"
            fullWidth
          />
        )}
      />
    </div>
  )
}

export default WeeklyThemes
