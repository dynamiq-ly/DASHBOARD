import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

function DisponibilyTab(props) {
  const methods = useFormContext()
  const { control } = methods

  return (
    <div>
      <Controller
        name="isVisible"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth className="mt-8 mb-16">
            <InputLabel id="demo-simple-select-label">Visibility</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="isVisible"
              label="Visibility"
              placeholder="Select Visibility"
              value={field.value}
              onChange={field.onChange}
            >
              <MenuItem value={0}>
                This restaurant will not appear in the list in our mobile app
              </MenuItem>
              <MenuItem value={1}>
                This restaurant will be visible in the list in our mobile app
              </MenuItem>
            </Select>
          </FormControl>
        )}
      />

      <Controller
        name="booking.can_book"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth className="mt-8 mb-16">
            <InputLabel id="demo-simple-select-label">Booking</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="booking.can_book"
              label="Visibility"
              placeholder="Select Visibility"
              value={field.value}
              onChange={field.onChange}
            >
              <MenuItem value={0}>Client can not book</MenuItem>
              <MenuItem value={1}>Client will be able to make reservation</MenuItem>
            </Select>
          </FormControl>
        )}
      />

      <Controller
        name="schedule.isBuffet"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth className="mt-8 mb-16">
            <InputLabel id="demo-simple-select-label">Main Restaurant</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="schedule.isBuffet"
              label="Visibility"
              placeholder="Select Visibility"
              value={field.value}
              onChange={field.onChange}
            >
              <MenuItem value={0}>This Restaurant won't have a buffet</MenuItem>
              <MenuItem value={1}>This Restaurant will have a buffet</MenuItem>
            </Select>
          </FormControl>
        )}
      />
    </div>
  )
}

export default DisponibilyTab
