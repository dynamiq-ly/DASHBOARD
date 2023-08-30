import TextField from '@mui/material/TextField'
import { Controller, useFormContext } from 'react-hook-form'

function BasicInfoTab(props) {
  const methods = useFormContext()
  const { control, getValues, formState } = methods

  const { errors } = formState

  return (
    <div>
      <Controller
        name="age"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Age Group"
            autoFocus
            id="age"
            variant="outlined"
            fullWidth
            error={!!errors.age}
            helperText={errors?.age?.message}
          />
        )}
      />

      <Controller
        name="age_group"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Age Range"
            autoFocus
            id="age_group"
            variant="outlined"
            fullWidth
            error={!!errors.age_group}
            helperText={errors?.age_group?.message}
          />
        )}
      />
    </div>
  )
}

export default BasicInfoTab
