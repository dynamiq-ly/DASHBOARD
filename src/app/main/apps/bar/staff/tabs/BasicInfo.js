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
    setValue('bar_id', productId)
  }, [productId, setValue])

  return (
    <div>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Staff name"
            autoFocus
            id="name"
            variant="outlined"
            fullWidth
            helperText="Please specify the name of the staff"
          />
        )}
      />

      <Controller
        name="position"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Staff Role"
            id="position"
            variant="outlined"
            fullWidth
            helperText="Please specify the role of the staff"
          />
        )}
      />
    </div>
  )
}

export default CategoryTab
