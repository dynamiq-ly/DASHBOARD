import { Checkbox, FormControlLabel } from '@mui/material'
import TextField from '@mui/material/TextField'
import { Controller, useFormContext } from 'react-hook-form'

function BasicInfoTab(props) {
  const methods = useFormContext()
  const { control } = methods

  return (
    <div>
      <Controller
        name="reminder_title"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Reminder"
            autoFocus
            disabled
            id="reminder_title"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="reminder_date"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            id="reminder_date"
            label="When"
            disabled
            required
            type="text"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="reminder_priority"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            id="reminder_priority"
            label="Priority"
            disabled
            required
            type="text"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="isAnswered"
        control={control}
        render={({ field }) => {
          return (
            <FormControlLabel
              label="Mark as Answred"
              control={<Checkbox {...field} id="isAnswered" defaultChecked={!!field.value} />}
            />
          )
        }}
      />
    </div>
  )
}

export default BasicInfoTab
