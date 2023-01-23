import TextField from '@mui/material/TextField'
import { Controller, useFormContext } from 'react-hook-form'

function ChefsTab(props) {
  const methods = useFormContext()
  const { control } = methods

  return (
    <div>
      <Controller
        name="chefs.restaurant_chef_exec_name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Executif Chef Name"
            autoFocus
            id="chefs.restaurant_chef_exec_name"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="chefs.restaurant_chef_name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="Assistant Chef Name"
            autoFocus
            required
            id="chefs.restaurant_chef_name"
            variant="outlined"
            fullWidth
          />
        )}
      />
    </div>
  )
}

export default ChefsTab
