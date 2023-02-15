import TextField from '@mui/material/TextField'
import { Controller, useFormContext } from 'react-hook-form'

function BasicInfoTab(props) {
  const methods = useFormContext()
  const { control } = methods

  return (
    <div>
      <Controller
        name="agency_title"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Title"
            autoFocus
            id="agency_title"
            variant="outlined"
            fullWidth
          />
        )}
      />
      <Controller
        name="agency_summary"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Summary"
            multiline
            rows={5}
            id="agency_summary"
            variant="outlined"
            fullWidth
          />
        )}
      />
      <Controller
        name="agency_website"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Website"
            id="agency_website"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="agency_description"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Description"
            multiline
            rows={8}
            id="agency_description"
            variant="outlined"
            fullWidth
          />
        )}
      />
    </div>
  )
}

export default BasicInfoTab
