import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios'
import { useLayoutEffect, useState } from 'react'

import { Controller, useFormContext } from 'react-hook-form'
import { useParams } from 'react-router-dom'

function CategoryTab(props) {
  const methods = useFormContext()
  const { control, setValue } = methods
  const [locations, setLocations] = useState([])

  const { productId } = useParams()

  useLayoutEffect(() => {
    setValue('et_id', productId)
  }, [productId, setValue])

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
        name="day"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            autoFocus
            type="date"
            id="day"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="start_time"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            autoFocus
            type="time"
            id="start_time"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="end_time"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            autoFocus
            type="time"
            id="end_time"
            variant="outlined"
            fullWidth
          />
        )}
      />
    </div>
  )
}

export default CategoryTab
