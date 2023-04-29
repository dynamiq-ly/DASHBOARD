import TextField from '@mui/material/TextField'
import { useEffect } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { useParams } from 'react-router-dom'

function BasicInfoTab(props) {
  const methods = useFormContext()
  const { control, setValue } = methods

  const { productId } = useParams()

  useEffect(() => {
    setValue('restaurant_id', productId)
  }, [productId, setValue])

  return (
    <div>
      <Controller
        name="restaurant_id"
        control={control}
        render={({ field }) => (
          <TextField {...field} className="hidden" required id="restaurant_id" />
        )}
      />

      <Controller
        name="serving_name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Name"
            autoFocus
            id="serving_name"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="serving_description"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            id="serving_description"
            label="Description"
            required
            type="text"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="serving_opens"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            id="serving_opens"
            label="Opening Time"
            required
            type="text"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="serving_closes"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            id="serving_closes"
            label="Closing Time"
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
