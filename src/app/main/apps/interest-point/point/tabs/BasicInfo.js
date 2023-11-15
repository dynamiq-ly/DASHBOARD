import TextField from '@mui/material/TextField'
import { Controller, useFormContext } from 'react-hook-form'
import DisponibilyTab from './DisponibilityTab'
import CategoryTab from './CategoryTab'

function BasicInfoTab(props) {
  const methods = useFormContext()
  const { control, formState } = methods

  const { errors } = formState

  return (
    <div>
      <CategoryTab />
      <DisponibilyTab />

      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Name"
            autoFocus
            id="name"
            variant="outlined"
            fullWidth
            error={!!errors.name}
            helperText={errors?.name?.message}
          />
        )}
      />

      <Controller
        name="location"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="Location"
            required
            multiline
            rows={2}
            id="location"
            variant="outlined"
            fullWidth
            error={!!errors.location}
            helperText={errors?.location?.message}
          />
        )}
      />

      <Controller
        name="coordinates"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="Coordinates"
            id="	coordinates"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="website"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="Web Link"
            id="website"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="phone"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="Phone"
            id="phone"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            id="description"
            label="Descripton"
            type="text"
            required
            multiline
            rows={10}
            variant="outlined"
            fullWidth
          />
        )}
      />
    </div>
  )
}

export default BasicInfoTab
