import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'

import { Controller, useFormContext } from 'react-hook-form'

function CategoryTab(props) {
  const methods = useFormContext()
  const { control } = methods
  const [data, setData] = useState(undefined)

  useEffect(() => {
    axios.get('api/point-of-interest/type').then((res) => res.data && setData(res.data))
  }, []) // eslint-disable-line

  return (
    <div>
      <Controller
        name="point_interest_types_id"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Categroy</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="point_interest_types_id"
              label="Type"
              value={field.value}
              onChange={field.onChange}
            >
              {data &&
                data.map((el) => (
                  <MenuItem key={el.id} value={`${el.id}`}>
                    {el.point_type}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        )}
      />
    </div>
  )
}

export default CategoryTab
