import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import { Controller, useFormContext } from 'react-hook-form'

function BasicInfoTab(props) {
  const methods = useFormContext()
  const { control } = methods

  return (
    <div>
      <Controller
        name="connectivity_name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Wifi Name"
            autoFocus
            id="connectivity_name"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="connectivity_password"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            id="connectivity_password"
            label="Wifi Password"
            required
            type="text"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="connectivity_state"
        control={control}
        render={({ field }) => {
          console.log(field)
          return (
            <FormControlLabel
              label="Private Wifi"
              control={
                <Checkbox {...field} id="connectivity_state" defaultChecked={!!field.value} />
              }
            />
          )
        }}
      />
    </div>
  )
}

export default BasicInfoTab
