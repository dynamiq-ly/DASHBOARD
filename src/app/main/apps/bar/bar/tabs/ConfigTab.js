import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

import { Controller, useFormContext } from 'react-hook-form'
import FuseSvgIcon from '@fuse/core/FuseSvgIcon/FuseSvgIcon'

function CategoryTab(props) {
  const methods = useFormContext()
  const { control } = methods

  return (
    <div className="flex flex-col gap-32">
      <Controller
        name="visible"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Visible</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="visible"
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
        name="reservation_required"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Reservation Needed</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="reservation_required"
              label="reservation"
              value={field.value}
              onChange={field.onChange}
            >
              <MenuItem value={0} className="flex items-center gap-2">
                <FuseSvgIcon className="text-red" size={20}>
                  heroicons-outline:minus-circle
                </FuseSvgIcon>
                Making Reservation not needed
              </MenuItem>
              <MenuItem value={1} className="flex items-center gap-2">
                <FuseSvgIcon className="text-green" size={20}>
                  heroicons-outline:minus-circle
                </FuseSvgIcon>
                Making Reservation is a must
              </MenuItem>
            </Select>
          </FormControl>
        )}
      />
      <Controller
        name="adults_only"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Allow only Adults</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="adults_only"
              label="Adults"
              value={field.value}
              onChange={field.onChange}
            >
              <MenuItem value={0} className="flex items-center gap-2">
                <FuseSvgIcon className="text-red" size={20}>
                  heroicons-outline:minus-circle
                </FuseSvgIcon>
                Everyone Allowed
              </MenuItem>
              <MenuItem value={1} className="flex items-center gap-2">
                <FuseSvgIcon className="text-green" size={20}>
                  heroicons-outline:minus-circle
                </FuseSvgIcon>
                Only Adults allowed
              </MenuItem>
            </Select>
          </FormControl>
        )}
      />
    </div>
  )
}

export default CategoryTab
