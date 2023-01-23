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
        name="phone_title"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="title"
            autoFocus
            id="phone_title"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="phone_instruction"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            id="phone_instruction"
            label="Instruction"
            required
            type="text"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="phone_urgent"
        control={control}
        render={({ field }) => {
          return (
            <FormControlLabel
              label="Urgency"
              control={<Checkbox {...field} id="phone_urgent" defaultChecked={!!field.value} />}
            />
          )
        }}
      />
    </div>
  )
}

export default BasicInfoTab
