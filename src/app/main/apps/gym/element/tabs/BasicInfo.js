import TextField from '@mui/material/TextField'

import { Controller, useFormContext } from 'react-hook-form'

function BasicInfoTab(props) {
  const methods = useFormContext()
  const { control } = methods

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
            label="Gym Name"
            autoFocus
            id="name"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="location"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Gym Location"
            autoFocus
            id="location"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Gym Description"
            autoFocus
            multiline
            rows={5}
            id="description"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="terms"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            id="terms"
            className="mt-8 mb-16"
            label="Terms"
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

      <Controller
        name="timing-open"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            autoFocus
            type="time"
            id="timing-open"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="timing-close"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            autoFocus
            type="time"
            id="timing-close"
            variant="outlined"
            fullWidth
          />
        )}
      />
    </div>
  )
}

export default BasicInfoTab
