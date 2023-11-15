import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'

import { Controller, useFormContext } from 'react-hook-form'
import FuseSvgIcon from '@fuse/core/FuseSvgIcon/FuseSvgIcon'

function CategoryTab(props) {
  const methods = useFormContext()
  const { control } = methods
  const [data, setData] = useState(undefined)

  useEffect(() => {
    axios.get('api/point-of-interest/categories').then((res) => res.data && setData(res.data))
  }, []) // eslint-disable-line

  return (
    <div className="mt-8 mb-24">
      <Controller
        name="point_id"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Categroy</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="point_id"
              label="Type"
              value={field.value}
              onChange={field.onChange}
            >
              {data &&
                data.map((el) => (
                  <MenuItem key={el.id} value={`${el.id}`} className="flex items-center gap-2">
                    {el.visible === 0 ? (
                      <FuseSvgIcon className="text-red" size={20}>
                        heroicons-outline:minus-circle
                      </FuseSvgIcon>
                    ) : (
                      <FuseSvgIcon className="text-green" size={20}>
                        heroicons-outline:plus-circle
                      </FuseSvgIcon>
                    )}
                    {el.name}
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
