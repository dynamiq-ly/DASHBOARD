import TextField from '@mui/material/TextField'
import { Controller, useFormContext } from 'react-hook-form'

function BasicInfoTab(props) {
  const methods = useFormContext()
  const { control } = methods

  return (
    <div>
      <Controller
        name='AirConditionnerInstruction'
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className='mt-8 mb-16'
            required
            label='title'
            autoFocus
            id='Air Conditionner Instructions'
            variant='outlined'
            fullWidth
          />
        )}
      />

      <Controller
        name='AirConditionnerWarning'
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className='mt-8 mb-16'
            id='AirConditionnerWarning'
            label='Warnings'
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
