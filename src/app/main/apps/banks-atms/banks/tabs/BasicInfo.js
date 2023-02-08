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
        name='bank_name'
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className='mt-8 mb-16'
            required
            label='Bank Name'
            autoFocus
            id='bank_name'
            variant='outlined'
            fullWidth
          />
        )}
      />

      <Controller
        name='bank_description'
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className='mt-8 mb-16'
            id='bank_description'
            label='Bank Description'
            required
            type='text'
            variant='outlined'
            fullWidth
          />
        )}
      />
      <Controller
        name='bank_location_textual'
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className='mt-8 mb-16'
            id='bank_location_textual'
            label='Bank Location'
            required
            type='text'
            variant='outlined'
            fullWidth
          />
        )}
      />
      <Controller
        name='bank_location_coords'
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className='mt-8 mb-16'
            id='bank_location_coords'
            label='Bank Coordination'
            required
            type='text'
            variant='outlined'
            fullWidth
          />
        )}
      />
    </div>
  )
}

export default BasicInfoTab
