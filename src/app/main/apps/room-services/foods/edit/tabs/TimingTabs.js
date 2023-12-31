import TextField from '@mui/material/TextField'
import { Controller, useFormContext } from 'react-hook-form'

function TimingTabs(props) {
  const methods = useFormContext()
  const { control } = methods

  return (
    <div>
      <Controller
        name="food_service_opens"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Opens From"
            autoFocus
            id="food_service_opens"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="food_service_closes"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            id="food_service_closes"
            label="Closes At"
            required
            type="text"
            variant="outlined"
            fullWidth
          />
        )}
      />
    </div>
  )
}

export default TimingTabs
