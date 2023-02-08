import { Checkbox, FormControlLabel } from '@mui/material'
import TextField from '@mui/material/TextField'
import { Controller, useFormContext } from 'react-hook-form'

function BasicInfoTab(props) {
  const methods = useFormContext()
  const { control } = methods

  return (
    <div>
      <Controller
        name="request_name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Request Title"
            autoFocus
            disabled
            id="request_name"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="request_email"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            id="request_email"
            label="Email"
            disabled
            required
            type="text"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="request_content"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            id="request_content"
            label="Content"
            disabled
            required
            type="text"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="created_at"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            id="created_at"
            label="Created"
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
