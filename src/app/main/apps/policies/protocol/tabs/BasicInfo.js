import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import TextField from '@mui/material/TextField'
import { Controller, useFormContext } from 'react-hook-form'

function BasicInfoTab(props) {
  const methods = useFormContext()
  const { control } = methods

  return (
    <div>
      <Controller name='title' control={control} render={({ field }) => <TextField {...field} className='mt-8 mb-16' required label='Title' autoFocus id='title' variant='outlined' fullWidth />} />

      <Controller
        name='subTitle'
        control={control}
        render={({ field }) => <TextField {...field} className='mt-8 mb-16' id='subTitle' label='Content' type='text' multiline rows={5} variant='outlined' fullWidth />}
      />

      <Controller
        name='type'
        control={control}
        render={({ field }) => (
          <FormControl fullWidth className='mt-8 mb-16'>
            <InputLabel id='demo-simple-select-label'>Type</InputLabel>
            <Select labelId='demo-simple-select-label' id='type' label='Visibility' placeholder='Select Type' value={field.value} onChange={field.onChange}>
              <MenuItem value='APPLICATION'>Application Policies</MenuItem>
              <MenuItem value='HOTEL'>Hotel Policies</MenuItem>
            </Select>
          </FormControl>
        )}
      />

      <Controller
        name='file'
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            id='file'
            className='mt-8 mb-16'
            label='File'
            fullWidth
            type='file'
            onChange={async (e) => {
              function readFileAsync() {
                return new Promise((resolve, reject) => {
                  const file = e.target.files[0]
                  if (!file) {
                    return
                  }

                  const reader = new FileReader()

                  reader.onload = () => {
                    resolve(file)
                  }

                  reader.onerror = reject

                  reader.readAsBinaryString(file)
                })
              }

              const newImage = await readFileAsync()

              onChange(newImage)
            }}
          />
        )}
      />
    </div>
  )
}

export default BasicInfoTab
