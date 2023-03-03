import { TextField } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

function BasicInfoTab(props) {
  const methods = useFormContext()
  const { control } = methods

  return (
    <div>
      <Controller
        name='TowelsInstruction'
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className='mt-8 mb-16'
            required
            label='title'
            autoFocus
            id='Towels Instruction'
            variant='outlined'
            fullWidth
          />
        )}
      />
    </div>
  )
}

export default BasicInfoTab
