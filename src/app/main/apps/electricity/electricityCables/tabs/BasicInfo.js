import TextField from '@mui/material/TextField'
import { Controller, useFormContext } from 'react-hook-form'

function BasicInfoTab(props) {
  const methods = useFormContext()
  const { control } = methods

  return (
    <div>
      <Controller
        name='ElectricityInstruction'
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className='mt-8 mb-16'
            required
            label='title'
            autoFocus
            id='electricity Instructions'
            variant='outlined'
            fullWidth
          />
        )}
      />

      <Controller
        name='Room'
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className='mt-8 mb-16'
            id='Room'
            label='Room cables Instruction'
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
