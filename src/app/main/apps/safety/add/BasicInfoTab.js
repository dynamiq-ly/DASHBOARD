import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { Controller, useFormContext } from 'react-hook-form'

function BasicInfoTab(props) {
  const methods = useFormContext()
  const { control, formState } = methods
  const { errors } = formState

  return (
    <div>
      <Controller
        name='measure_name'
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className='mt-8 mb-16'
            error={!!errors.name}
            required
            helperText={errors?.name?.message}
            label='Name'
            autoFocus
            id='measure_name'
            variant='outlined'
            fullWidth
          />
        )}
      />

      <Controller
        name='measure_content'
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className='mt-8 mb-16'
            id='content'
            label='Content'
            type='text'
            multiline
            rows={5}
            variant='outlined'
            fullWidth
          />
        )}
      />

      <Controller
        name='measure_icon'
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className='mt-8 mb-16'
            placeholder='Type icon name'
            label='Icon'
            type='text'
            id='icon'
            variant='outlined'
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        )}
      />
    </div>
  )
}

export default BasicInfoTab
