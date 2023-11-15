import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import axios from 'axios'
import { useLayoutEffect, useEffect, useState } from 'react'

import { Controller, useFormContext } from 'react-hook-form'
import { useParams } from 'react-router-dom'

function CategoryTab(props) {
  const methods = useFormContext()
  const { control, setValue } = methods
  const [data, setData] = useState(undefined)

  const { productId, addonsId } = useParams()

  useLayoutEffect(() => {
    setValue('room_id', productId)
  }, [productId, setValue])

  useEffect(() => {
    axios.get('api/rooms/addons').then((res) => res.data && setData(res.data))
  }, []) // eslint-disable-line

  return (
    <div className="grid gap-32">
      <Controller
        name="featured"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Featured</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="featured"
              label="Type"
              value={field.value}
              onChange={field.onChange}
            >
              <MenuItem value={1} className="flex items-center gap-2">
                Featured
              </MenuItem>
              <MenuItem value={0} className="flex items-center gap-2">
                Not Featured
              </MenuItem>
            </Select>
          </FormControl>
        )}
      />

      <Controller
        name="addon_id"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Addon</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="addon_id"
              label="Type"
              value={field.value}
              onChange={field.onChange}
            >
              {data &&
                data.map((el) => (
                  <MenuItem key={el.id} value={`${el.id}`} className="flex items-center gap-2">
                    <img
                      alt={el.label}
                      className="h-[24px] w-[24px]"
                      src={`${process.env.REACT_APP_STORAGE_UTELLS}/rooms/room-add-ons/${el.image}`}
                    />
                    {el.label}
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
