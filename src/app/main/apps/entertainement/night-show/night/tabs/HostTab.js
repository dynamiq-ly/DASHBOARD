import TextField from '@mui/material/TextField'
import { Controller, useFormContext } from 'react-hook-form'
import HostImage from './HostImage'

function HostTabs(props) {
  const methods = useFormContext()
  const { control } = methods

  return (
    <div>
      <Controller
        name="host_name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="Performer Name"
            id="host_name"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="host_role"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="Performer Role"
            id="host_role"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="host_description"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="host Description"
            multiline
            rows={5}
            id="host_description"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <HostImage />
    </div>
  )
}

export default HostTabs
