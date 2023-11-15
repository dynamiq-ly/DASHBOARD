import TextField from '@mui/material/TextField'

import { Controller, useFormContext } from 'react-hook-form'

function BasicInfoTab(props) {
  const methods = useFormContext()
  const { control } = methods

  return (
    <div>
      <Controller
        name="label"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Feature Name"
            autoFocus
            id="label"
            variant="outlined"
            fullWidth
            helperText="Please specify the name of the feature"
          />
        )}
      />
    </div>
  )
}

export default BasicInfoTab
