import TextField from '@mui/material/TextField'

import { Controller, useFormContext } from 'react-hook-form'
import { Alert, AlertTitle } from '@mui/material'
import ImagesTab from './ImagesTab'

function BasicInfoTab(props) {
  const methods = useFormContext()
  const { control, getValues, formState } = methods

  const { errors } = formState

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
            error={!!errors.name}
            helperText={errors?.name?.message}
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
            error={!!errors.location}
            helperText={errors?.location?.message}
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
            rows={7}
            id="description"
            variant="outlined"
            fullWidth
            error={!!errors.description}
            helperText={errors?.description?.message}
          />
        )}
      />

      {getValues('terms') && (
        <Alert severity="info">
          <AlertTitle>PDF file exsits</AlertTitle>A file already uploaded{' '}
          <a
            href={`${process.env.REACT_APP_STORAGE_UTELLS}/pdf/gym/${getValues('terms')}`}
            target="_blank"
            rel="noreferrer"
          >
            <strong>check it out!</strong>
          </a>{' '}
          You can override it by uploading a new oen
        </Alert>
      )}

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
            error={!!errors['timing-open']}
            helperText={errors['timing-open']?.message}
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
            error={!!errors['timing-close']}
            helperText={errors['timing-close']?.message}
          />
        )}
      />

      <ImagesTab />
    </div>
  )
}

export default BasicInfoTab
