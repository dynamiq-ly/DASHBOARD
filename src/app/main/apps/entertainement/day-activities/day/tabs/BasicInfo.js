import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import TextField from '@mui/material/TextField'
import { Controller, useFormContext } from 'react-hook-form'
import { useHelperContext } from 'src/app/contexts/HelperContext'

function BasicInfoTab(props) {
  const methods = useFormContext()
  const { control } = methods

  const { locations } = useHelperContext()

  return (
    <div>
      <Controller
        name="entertainement_name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Name"
            autoFocus
            id="entertainement_name"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="entertainement_summary"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            id="entertainement_summary"
            label="Summary"
            required
            type="text"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="entertainement_description"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            id="entertainement_description"
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
        name="entertainement_age"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth className="mt-8 mb-16">
            <InputLabel id="demo-simple-select-label">Age Group</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="entertainement_age"
              label="Age Group"
              placeholder="Select Age Group"
              value={field.value}
              onChange={field.onChange}
            >
              <MenuItem value="KIDS">KIDS</MenuItem>
              <MenuItem value="ADULTS">ADULTS</MenuItem>
              <MenuItem value="TEENS">TEENS</MenuItem>
              <MenuItem value="FAMILY">FAMILY</MenuItem>
              <MenuItem value="OTHER">OTHER</MenuItem>
            </Select>
          </FormControl>
        )}
      />

      <Controller
        name="entertainement_location"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth className="mt-8 mb-16">
            <InputLabel id="demo-simple-select-label">Location</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="entertainement_location"
              label="Age Group"
              placeholder="Select Location"
              value={field.value}
              onChange={field.onChange}
            >
              <MenuItem value="NOT REGISTRED YET">NOT REGISTRED YET</MenuItem>
              {locations.map((location, index) => (
                <MenuItem key={index} value={location.location_name}>
                  {location.location_name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      />
    </div>
  )
}

export default BasicInfoTab
