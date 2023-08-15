import TextField from '@mui/material/TextField'

import { Controller, useFormContext } from 'react-hook-form'

function BasicInfoTab(props) {
  const methods = useFormContext()
  const { control } = methods

  return (
    <div>
      <Controller name='name' control={control} render={({ field }) => <TextField {...field} className='mt-8 mb-16' required label='Chef Name' autoFocus id='name' variant='outlined' fullWidth />} />

      <Controller
        name='location'
        control={control}
        render={({ field }) => <TextField {...field} className='mt-8 mb-16' required label='Chef Role' autoFocus id='location' variant='outlined' fullWidth />}
      />
    </div>
  )
}

export default BasicInfoTab
