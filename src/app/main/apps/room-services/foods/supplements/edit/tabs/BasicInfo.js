import TextField from '@mui/material/TextField'
import { useEffect } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { useParams } from 'react-router-dom'

function BasicInfoTab(props) {
  const methods = useFormContext()
  const { control, setValue } = methods
  const { plateId } = useParams()

  useEffect(() => {
    setValue('food_service_plates_id', plateId)
  }, [plateId, setValue])

  return (
    <div>
      <Controller
        name="food_service_plates_id"
        control={control}
        render={({ field }) => (
          <TextField {...field} className="hidden" required id="food_service_plates_id" />
        )}
      />

      <Controller
        name="supplement_name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Title"
            autoFocus
            id="supplement_name"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="supplement_price"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            id="supplement_price"
            label="Price"
            required
            variant="outlined"
            fullWidth
          />
        )}
      />
    </div>
  )
}

export default BasicInfoTab
