import TextField from '@mui/material/TextField'
import { Controller, useFormContext } from 'react-hook-form'

function BasicInfoTab(props) {
  const methods = useFormContext()
  const { control } = methods

  return (
    <div>
      <Controller
        name="restaurant_name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Name"
            autoFocus
            id="restaurant_name"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="restaurant_email"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            id="restaurant_email"
            label="email"
            required
            type="text"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="restaurant_phone"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            id="restaurant_phone"
            label="Phone"
            required
            type="text"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="restaurant_description"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            id="restaurant_description"
            label="Description"
            required
            multiline
            rows={6}
            type="text"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="restaurant_website"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            id="restaurant_website"
            label="Website"
            required
            type="text"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="restaurant_location"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            id="restaurant_location"
            label="Addresse"
            required
            type="text"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="restaurant_position"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            id="restaurant_position"
            label="Coordinates"
            required
            type="text"
            variant="outlined"
            fullWidth
          />
        )}
      />
    </div>
  )
}

export default BasicInfoTab
