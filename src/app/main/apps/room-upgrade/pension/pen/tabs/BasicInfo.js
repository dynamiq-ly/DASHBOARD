import TextField from '@mui/material/TextField'
import { Controller, useFormContext } from 'react-hook-form'

function BasicInfoTab(props) {
  const methods = useFormContext()
  const { control } = methods

  return (
    <div>
      <Controller
        name="pension_name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Name"
            autoFocus
            id="pension_name"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="pension_price"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Price"
            id="pension_price"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="pension_price_kids"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Price"
            id="pension_price_kids"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="pension_description"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            multiline
            rows={3}
            label="Description"
            id="pension_description"
            variant="outlined"
            fullWidth
          />
        )}
      />
    </div>
  )
}

export default BasicInfoTab
