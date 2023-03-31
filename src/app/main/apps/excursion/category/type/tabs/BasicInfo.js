import TextField from '@mui/material/TextField'
import { Controller, useFormContext } from 'react-hook-form'

function BasicInfoTab(props) {
  const methods = useFormContext()
  const { control } = methods

  return (
    <div>
      <Controller
        name='activity_name'
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className='mt-8 mb-16'
            required
            label='title'
            autoFocus
            id='activity_name'
            variant='outlined'
            fullWidth
          />
        )}
      />
    </div>
  )
}

export default BasicInfoTab
