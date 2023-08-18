import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

import { Controller, useFormContext } from 'react-hook-form'
import FuseSvgIcon from '@fuse/core/FuseSvgIcon/FuseSvgIcon'

function CategoryTab(props) {
  const methods = useFormContext()
  const { control } = methods

  return (
    <div className="flex flex-col gap-32">
      <Controller
        name="config.visible"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Visible</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="config.visible"
              label="Status"
              value={field.value}
              onChange={field.onChange}
            >
              <MenuItem value={0} className="flex items-center gap-2">
                <FuseSvgIcon className="text-red" size={20}>
                  heroicons-outline:minus-circle
                </FuseSvgIcon>
                Not Visible
              </MenuItem>
              <MenuItem value={1} className="flex items-center gap-2">
                <FuseSvgIcon className="text-green" size={20}>
                  heroicons-outline:minus-circle
                </FuseSvgIcon>
                Visible
              </MenuItem>
            </Select>
          </FormControl>
        )}
      />
      <Controller
        name="config.booking"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Bookable</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="config.booking"
              label="Booking"
              value={field.value}
              onChange={field.onChange}
            >
              <MenuItem value={0} className="flex items-center gap-2">
                <FuseSvgIcon className="text-red" size={20}>
                  heroicons-outline:minus-circle
                </FuseSvgIcon>
                Booking not allowed
              </MenuItem>
              <MenuItem value={1} className="flex items-center gap-2">
                <FuseSvgIcon className="text-green" size={20}>
                  heroicons-outline:minus-circle
                </FuseSvgIcon>
                Booking allowed
              </MenuItem>
            </Select>
          </FormControl>
        )}
      />
    </div>
  )
}

export default CategoryTab
