import { Autocomplete, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import TextField from '@mui/material/TextField'
import { Controller, useFormContext } from 'react-hook-form'
import { useHelperContext } from 'src/app/contexts/HelperContext'
import FuseSvgIcon from '@fuse/core/FuseSvgIcon/FuseSvgIcon'
import HostTabs from './HostTab'

function BasicInfoTab(props) {
  const methods = useFormContext()
  const { control } = methods

  const { locations } = useHelperContext()

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
        name="genre"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Autocomplete
            className="mt-8 mb-16"
            multiple
            freeSolo
            value={(value && JSON.parse(value)) || ''}
            options={[]}
            onChange={(event, newValue) => {
              onChange(JSON.stringify(newValue))
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                className="mt-8 mb-16"
                placeholder="Insert Genre"
                label="Genre"
                variant="outlined"
                helperText="Please specify the genre of the menu, to keep inserting press enter."
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
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

      <Controller
        name="website_link"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="Website Link"
            id="website_link"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="youtube_link"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="Youtube Link"
            id="youtube_link"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <HostTabs />
    </div>
  )
}

export default BasicInfoTab
