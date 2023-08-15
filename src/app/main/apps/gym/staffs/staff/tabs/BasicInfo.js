import TextField from '@mui/material/TextField'
import { useEffect } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { useParams } from 'react-router-dom'

function BasicInfoTab(props) {
  const methods = useFormContext()
  const { control, setValue } = methods

  const { productId } = useParams()

  useEffect(() => {
    setValue('gym_id', productId)
  }, [productId, setValue])

  return (
    <div>
      <Controller
        name="gym_id"
        control={control}
        render={({ field }) => <TextField {...field} className="hidden" required id="gym_id" />}
      />

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
          />
        )}
      />

      <Controller
        name="job_title"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Role"
            id="job_title"
            variant="outlined"
            fullWidth
          />
        )}
      />
    </div>
  )
}

export default BasicInfoTab
