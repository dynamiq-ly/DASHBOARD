import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import TextField from '@mui/material/TextField'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

function BasicInfoTab(props) {
  const methods = useFormContext()
  const { control } = methods

  const [data, setData] = useState(undefined)

  useEffect(() => {
    axios.get('api/swimming-pool').then((res) => res.data && setData(res.data))
  }, []) // eslint-disable-line

  return (
    <div>
      <Controller
        name="pool_name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Pool Type"
            autoFocus
            id="pool_name"
            variant="outlined"
            fullWidth
          />
        )}
      />
      <Controller
        name="pool_capacity"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Pool Type"
            type="number"
            id="pool_capacity"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="pool_id"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Categroy</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="pool_id"
              label="Category"
              value={field.value}
              onChange={field.onChange}
            >
              {data &&
                data.map((el) => (
                  <MenuItem key={el.id} value={el.id}>
                    {el.pool_type}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        )}
      />

      <Controller
        name="pool_status"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth style={{ marginTop: 24 }}>
            <InputLabel id="demo-simple-select-label-1">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label-1"
              id="pool_status"
              label="Status"
              value={field.value}
              onChange={field.onChange}
            >
              <MenuItem value="0">Pool Will Not Appear to Users</MenuItem>
              <MenuItem value="1">Pool Will Appear to Users</MenuItem>
            </Select>
          </FormControl>
        )}
      />
    </div>
  )
}

export default BasicInfoTab
