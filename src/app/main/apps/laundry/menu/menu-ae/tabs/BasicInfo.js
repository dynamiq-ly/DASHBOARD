import TextField from '@mui/material/TextField'
import { Controller, useFormContext } from 'react-hook-form'

function BasicInfoTab(props) {
  const methods = useFormContext()
  const { control } = methods

  return (
    <div>
      <Controller
        name="clothes_type"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Clothes"
            autoFocus
            id="clothes_type"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="laundry"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="Laundry Pricing"
            id="laundry"
            variant="outlined"
            fullWidth
            type="number"
          />
        )}
      />

      <Controller
        name="dry_cleaning"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="Dry Cleaning Pricing"
            id="dry_cleaning"
            variant="outlined"
            fullWidth
            type="number"
          />
        )}
      />

      <Controller
        name="pressing"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            id="pressing"
            label="Pressing Pricing"
            required
            variant="outlined"
            fullWidth
            type="number"
          />
        )}
      />
    </div>
  )
}

export default BasicInfoTab
