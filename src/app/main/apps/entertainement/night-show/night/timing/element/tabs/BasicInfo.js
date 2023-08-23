import { TextField } from '@mui/material'
import { useLayoutEffect, useState } from 'react'

import { Controller, useFormContext } from 'react-hook-form'
import { useParams } from 'react-router-dom'

function CategoryTab(props) {
  const methods = useFormContext()
  const { control, setValue } = methods
  const [data, setData] = useState(undefined)

  const { productId } = useParams()

  useLayoutEffect(() => {
    setValue('et_id', productId)
  }, [productId, setValue])

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
            autoFocus
            type="Location"
            id="location"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="day"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            autoFocus
            type="date"
            id="day"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="start_time"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            autoFocus
            type="time"
            id="start_time"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="end_time"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            autoFocus
            type="time"
            id="end_time"
            variant="outlined"
            fullWidth
          />
        )}
      />
    </div>
  )
}

export default CategoryTab
