import {
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material'
import TextField from '@mui/material/TextField'
import { Controller, useFormContext } from 'react-hook-form'

function BasicInfoTab(props) {
  const methods = useFormContext()
  const { control } = methods

  return (
    <div>
      <Controller
        name='IncidentType'
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className='mt-8 mb-16'
            required
            label='title'
            autoFocus
            id='IncidentType'
            variant='outlined'
            fullWidth
            disabled
          />
        )}
      />

      <Controller
        name='IncidentLocation'
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className='mt-8 mb-16'
            required
            label='title'
            autoFocus
            id='IncidentLocation'
            variant='outlined'
            fullWidth
            disabled
          />
        )}
      />

      <Controller
        name='IncidentDate'
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className='mt-8 mb-16'
            required
            label='title'
            autoFocus
            id='IncidentDate'
            variant='outlined'
            fullWidth
            disabled
          />
        )}
      />

      <Controller
        name='IncidentDescription'
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className='mt-8 mb-16'
            required
            label='title'
            autoFocus
            id='IncidentDescription'
            variant='outlined'
            fullWidth
            disabled
          />
        )}
      />

      <Controller
        name='isAnswered'
        control={control}
        render={({ field }) => {
          return (
            <FormControlLabel
              label='Is Answered'
              control={
                <Checkbox
                  {...field}
                  id='isAnswered'
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
