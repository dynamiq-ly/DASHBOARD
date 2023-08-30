import { Autocomplete, Checkbox, TextField } from '@mui/material'
import axios from 'axios'
import { useLayoutEffect, useState } from 'react'

import { Controller, useFormContext } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBoxIcon from '@mui/icons-material/CheckBox'

function CategoryTab() {
  const methods = useFormContext()
  const { control, setValue } = methods
  const [data, setData] = useState([])

  const { productId } = useParams()

  useLayoutEffect(() => {
    setValue('et_id', productId)
  }, [productId, setValue])

  useLayoutEffect(() => {
    axios.get('/api/helpers/age-manager').then((res) => res.status === 200 && setData(res.data))
  }, [])

  return (
    <div>
      <Controller
        name="age"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Autocomplete
            className="mt-8 mb-16"
            multiple
            id="checkboxes-tags-demo"
            options={data}
            disableCloseOnSelect
            getOptionLabel={(option) => option.age}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                  checkedIcon={<CheckBoxIcon fontSize="small" />}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.age}
              </li>
            )}
            onChange={(event, newValue) => {
              onChange(JSON.stringify(newValue))
            }}
            renderInput={(params) => (
              <TextField {...params} label="Select Ages" placeholder="Select Ages" />
            )}
          />
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
