import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import TextField from '@mui/material/TextField'
import { Controller, useFormContext } from 'react-hook-form'
import FuseSvgIcon from '@fuse/core/FuseSvgIcon/FuseSvgIcon'

function BasicInfoTab(props) {
  const methods = useFormContext()
  const { control } = methods

  return (
    <div>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Name"
            autoFocus
            id="name"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="location"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Location"
            autoFocus
            id="location"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            id="description"
            label="Description"
            required
            type="text"
            multiline
            rows={5}
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="visible"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth className="mt-8 mb-16">
            <InputLabel id="demo-simple-select-label">Visibility</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="visible"
              label="Visibility"
              placeholder="Select Visibility"
              value={field.value}
              onChange={field.onChange}
            >
              <MenuItem value={0} className="flex items-center gap-4">
                <FuseSvgIcon className="text-red" size={20}>
                  heroicons-outline:minus-circle
                </FuseSvgIcon>
                Not Displayed Displayed
              </MenuItem>
              <MenuItem value={1} className="flex items-center gap-4">
                <FuseSvgIcon className="text-green" size={20}>
                  heroicons-outline:minus-circle
                </FuseSvgIcon>
                Is Displayed
              </MenuItem>
            </Select>
          </FormControl>
        )}
      />

      <Controller
        name="joinable"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth className="mt-8 mb-16">
            <InputLabel id="demo-simple-select-label">Can People Join</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="joinable"
              label="Can People Join"
              placeholder="Select Option"
              value={field.value}
              onChange={field.onChange}
            >
              <MenuItem value={1} className="flex items-center gap-4">
                <FuseSvgIcon className="text-green" size={20}>
                  heroicons-outline:minus-circle
                </FuseSvgIcon>
                You have join to attend
              </MenuItem>
              <MenuItem value={0} className="flex items-center gap-4">
                <FuseSvgIcon className="text-red" size={20}>
                  heroicons-outline:minus-circle
                </FuseSvgIcon>
                Everyone is welcomed
              </MenuItem>
            </Select>
          </FormControl>
        )}
      />
    </div>
  )
}

export default BasicInfoTab
