import { TextField } from '@mui/material'
import axios from 'axios'
import { useEffect, useLayoutEffect, useState } from 'react'

import { Controller, useFormContext } from 'react-hook-form'
import { useParams } from 'react-router-dom'

function CategoryTab(props) {
  const methods = useFormContext()
  const { control, setValue } = methods

  const [data, setData] = useState(undefined)
  const { alcoholId } = useParams()

  useLayoutEffect(() => {
    setValue('drink_id', alcoholId)
  }, [alcoholId, setValue])

  useEffect(() => {
    axios
      .get(`api/bars/menu/alcohol-drinks/${alcoholId}`)
      .then((res) => res.data && setData(res.data))
  }, [setData, alcoholId])

  return (
    <div>
      <Controller
        name="label"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Feature name"
            autoFocus
            id="label"
            variant="outlined"
            fullWidth
            helperText="Please specify the name of the drink"
          />
        )}
      />

      {data && data.type === 'bottle' && (
        <Controller
          name="value"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              className="mt-8 mb-16"
              required
              label="featuresId value"
              autoFocus
              id="value"
              variant="outlined"
              fullWidth
              helperText="Please specify the value of the drink"
            />
          )}
        />
      )}
    </div>
  )
}

export default CategoryTab
