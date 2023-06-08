import TextField from '@mui/material/TextField'
import { Controller, useFormContext } from 'react-hook-form'

function BookingTab(props) {
  const methods = useFormContext()
  const { control } = methods

  return (
    <div>
      <Controller
        name="booking.booking_capacity"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            id="booking.booking_capacity"
            label="Capacity"
            required
            type="number"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="booking.booking_terms"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            id="booking.booking_terms"
            label="Terms"
            required
            multiline
            rows={6}
            type="text"
            variant="outlined"
            fullWidth
            value={field.value || ''}
          />
        )}
      />
    </div>
  )
}

export default BookingTab
