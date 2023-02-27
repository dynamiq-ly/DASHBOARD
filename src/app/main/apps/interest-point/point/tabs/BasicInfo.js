import TextField from '@mui/material/TextField'
import { Controller, useFormContext } from 'react-hook-form'

function BasicInfoTab(props) {
  const methods = useFormContext()
  const { control } = methods

  return (
    <div>
      <Controller
        name="point_title"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Name"
            autoFocus
            id="point_title"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="point_small_summary"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="Small Summary"
            required
            multiline
            rows={2}
            id="point_small_summary"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="point_contact_number"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="Phone Number"
            id="	point_contact_number"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="point_website_information"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="Web Link"
            id="	point_website_information"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="point_textual_location"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="adress"
            id="point_textual_location"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="point_cords_location"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="Coordinates"
            id="point_cords_location"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="point_recommended_visit"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="Recommended Visit"
            id="point_recommended_visit"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="point_description"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            id="point_description"
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
