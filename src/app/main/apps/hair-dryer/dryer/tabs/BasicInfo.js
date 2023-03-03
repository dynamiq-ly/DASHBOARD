import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import TextField from '@mui/material/TextField'
import { Controller, useFormContext } from 'react-hook-form'

function BasicInfoTab(props) {
  const methods = useFormContext()
  const { control } = methods

  return (
    <div>
      <Controller
        name='HairDryerInstruction'
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className='mt-8 mb-16'
            required
            label='title'
            autoFocus
            id='Hair Dryer Instructions'
            variant='outlined'
            fullWidth
          />
        )}
      />

      <Controller
        name='HairDryerWarning'
        control={control}
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Categroy</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='HairDryerWarning'
              label='Type'
              value={field.value}
              onChange={field.onChange}
            >
              <MenuItem value='0'>No warning</MenuItem>
              <MenuItem value='1'>Warning</MenuItem>
            </Select>
          </FormControl>
        )}
      />
    </div>
  )
}

export default BasicInfoTab
