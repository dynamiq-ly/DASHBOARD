import TextField from '@mui/material/TextField'
import { Controller, useFormContext } from 'react-hook-form'
import { useState, useLayoutEffect } from 'react'
import axios from 'axios'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { BannerImage } from './ImageTab'
import TimingTab from './TimingTab'

function BasicInfoTab(props) {
  const methods = useFormContext()
  const { control } = methods
  const [locations, setLocations] = useState([])

  useLayoutEffect(() => {
    axios
      .get('/api/helpers/location-manager')
      .then((res) => res.status === 200 && setLocations(res.data))
  }, [])

  return (
    <div>
      <Controller
        name="location"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth className="mt-8 mb-16">
            <InputLabel id="demo-simple-select-label">Location</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="location"
              label="Location"
              placeholder="Select setting"
              value={field.value}
              onChange={field.onChange}
            >
              {locations &&
                locations.map((el) => (
                  <MenuItem key={el.id} value={el.label} className="flex items-center gap-4">
                    {el.label}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        )}
      />

      <Controller
        name="category"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            id="category"
            label="Category"
            required
            type="text"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="slug"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            id="slug"
            label="Title"
            required
            type="text"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <BannerImage />

      <TimingTab />
    </div>
  )
}

export default BasicInfoTab
