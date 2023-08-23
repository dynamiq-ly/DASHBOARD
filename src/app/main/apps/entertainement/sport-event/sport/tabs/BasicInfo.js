import TextField from '@mui/material/TextField'
import { Controller, useFormContext } from 'react-hook-form'
import { useHelperContext } from 'src/app/contexts/HelperContext'
import { BannerImage } from './ImageTab'

function BasicInfoTab(props) {
  const methods = useFormContext()
  const { control } = methods

  const { locations } = useHelperContext()

  return (
    <div>
      <Controller
        name="location"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Location"
            autoFocus
            id="location"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="category"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            id="category"
            label="Category"
            required
            type="text"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="slug"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            id="slug"
            label="Title"
            required
            type="text"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <BannerImage />
    </div>
  )
}

export default BasicInfoTab
