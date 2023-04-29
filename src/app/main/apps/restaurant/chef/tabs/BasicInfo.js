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
        name="chef_name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Chef Name"
            autoFocus
            id="chef_name"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="chef_role"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Chef Role"
            autoFocus
            id="chef_role"
            variant="outlined"
            fullWidth
          />
        )}
      />
    </div>
  )
}

export default BasicInfoTab
