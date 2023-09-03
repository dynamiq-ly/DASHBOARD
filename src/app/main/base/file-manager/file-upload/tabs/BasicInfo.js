import TextField from '@mui/material/TextField'

import { Controller, useFormContext } from 'react-hook-form'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ImagesTab from './ImagesTab'

function BasicInfoTab(props) {
  const methods = useFormContext()
  const { control, getValues, formState } = methods

  const [data, setData] = useState(null)

  const { errors } = formState

  useEffect(() => {
    axios.get('api/helpers/file-manager/directories').then((res) => res.data && setData(res.data))
  }, [])

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
            label="File Name"
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
        name="feature"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">This Location Inside the hotel ?</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="feature"
              label="Status"
              required
              value={field.value}
              className="mt-8 mb-16"
              onChange={field.onChange}
              error={!!errors.feature}
              helperText={errors?.feature?.message}
            >
              {data &&
                data.map((el) => (
                  <MenuItem
                    key={el.id}
                    value={el.directory}
                    className="flex items-center gap-2 capitalize"
                  >
                    {el.directory}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        )}
      />

      <Controller
        name="path"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="Nested Path Inside Feature"
            autoFocus
            id="path"
            variant="outlined"
            fullWidth
            error={!!errors.path}
            helperText={errors?.path?.message}
          />
        )}
      />
      {getValues('feature') === 'pdf' ? (
        <Controller
          name="image"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              id="image"
              className="mt-8 mb-16"
              label="File"
              fullWidth
              type="file"
              onChange={async (e) => {
                function readFileAsync() {
                  return new Promise((resolve, reject) => {
                    const file = e.target.files[0]
                    if (!file) {
                      return
                    }

                    const reader = new FileReader()

                    reader.onload = () => {
                      resolve(file)
                    }

                    reader.onerror = reject

                    reader.readAsBinaryString(file)
                  })
                }

                const newImage = await readFileAsync()

                onChange(newImage)
              }}
            />
          )}
        />
      ) : (
        <ImagesTab />
      )}
    </div>
  )
}

export default BasicInfoTab
