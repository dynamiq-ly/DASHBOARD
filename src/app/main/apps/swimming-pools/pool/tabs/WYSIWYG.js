import { Controller, useFormContext } from 'react-hook-form'
import { TextField } from '@mui/material'

function WYSIWYG(props) {
  const methods = useFormContext()
  const { control } = methods

  return (
    <div>
      <Controller
        name="pool_description"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Pool Type"
            autoFocus
            multiline
            rows={20}
            id="pool_description"
            variant="outlined"
            fullWidth
          />
        )}
      />
    </div>
  )
}

export default WYSIWYG
