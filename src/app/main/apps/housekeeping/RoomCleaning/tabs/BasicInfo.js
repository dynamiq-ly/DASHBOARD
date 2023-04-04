import { Checkbox, FormControlLabel } from '@mui/material'
import TextField from '@mui/material/TextField'
import { Controller, useFormContext } from 'react-hook-form'

function BasicInfoTab(props) {
  const methods = useFormContext()
  const { control } = methods

  return (
    <div>
      <Controller
        name='request'
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className='mt-8 mb-16'
            id='room_request_content'
            label='Content'
            disabled
            required
            multiline
            rows={6}
            type='text'
            variant='outlined'
            fullWidth
          />
        )}
      />

      <Controller
        name='room_number'
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className='mt-8 mb-16'
            id='room_number'
            label='Room Number'
            disabled
            required
            type='text'
            variant='outlined'
            fullWidth
          />
        )}
      />

      <Controller
        name='isAnsexred'
        control={control}
        render={({ field }) => {
          return (
            <FormControlLabel
              label='Mark as Answred'
              control={
                <Checkbox
                  {...field}
                  id='isAnsexred'
                  defaultChecked={!!field.value}
                />
              }
            />
          )
        }}
      />
    </div>
  )
}

export default BasicInfoTab
