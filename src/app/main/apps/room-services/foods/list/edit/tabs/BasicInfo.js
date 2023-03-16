import { Autocomplete } from '@mui/material'
import TextField from '@mui/material/TextField'
import { Controller, useFormContext } from 'react-hook-form'

function BasicInfoTab(props) {
  const methods = useFormContext()
  const { control } = methods

  return (
    <div>
      <Controller
        name="plate_name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="title"
            autoFocus
            id="plate_name"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="plate_price"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            id="plate_price"
            label="Minimum order price"
            required
            type="number"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="plate_descripiton"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            id="plate_descripiton"
            label="Description"
            required
            multiline
            rows={5}
            type="text"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="plate_variance"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Autocomplete
            className="mt-8 mb-16"
            multiple
            freeSolo
            value={JSON.parse(value)}
            options={[]}
            onChange={(event, newValue) => {
              onChange(JSON.stringify(newValue))
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Select Variance"
                label="plate variance"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
          />
        )}
      />
    </div>
  )
}

export default BasicInfoTab
