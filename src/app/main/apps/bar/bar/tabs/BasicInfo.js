import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import TextField from '@mui/material/TextField'

import { Controller, useFormContext } from 'react-hook-form'
import FuseSvgIcon from '@fuse/core/FuseSvgIcon/FuseSvgIcon'

function BasicInfoTab(props) {
  const methods = useFormContext()
  const { control, formState } = methods

  const { errors } = formState

  return (
    <div>
      <Controller
        name="title"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="bar Title"
            autoFocus
            id="title"
            variant="outlined"
            fullWidth
            error={!!errors.title}
            helperText={errors?.title?.message}
          />
        )}
      />

      <Controller
        name="type"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Bar Type"
            autoFocus
            id="type"
            variant="outlined"
            fullWidth
            error={!!errors.type}
            helperText={errors?.type?.message}
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
            label="Bar Location"
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
        name="phone_number"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Bar Phone Number"
            autoFocus
            id="phone_number"
            variant="outlined"
            fullWidth
            error={!!errors.phone_number}
            helperText={errors?.phone_number?.message}
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
            label="Bar Description"
            autoFocus
            multiline
            rows={5}
            id="description"
            variant="outlined"
            fullWidth
            error={!!errors.description}
            helperText={errors?.description?.message}
          />
        )}
      />

      <Controller
        name="timing_open"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            autoFocus
            label="Timing Open"
            type="time"
            id="timing_open"
            variant="outlined"
            fullWidth
            error={!!errors.timing_open}
            helperText={errors?.timing_open?.message}
          />
        )}
      />

      <Controller
        name="timing_close"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            autoFocus
            label="Timing Close"
            type="time"
            id="timing_close"
            variant="outlined"
            fullWidth
            error={!!errors.timing_close}
            helperText={errors?.timing_close?.message}
          />
        )}
      />

      <div className="flex flex-col gap-32">
        <Controller
          name="visible"
          control={control}
          render={({ field }) => (
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Visible</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="visible"
                label="Status"
                value={field.value}
                onChange={field.onChange}
              >
                <MenuItem value={0} className="flex items-center gap-2">
                  <FuseSvgIcon className="text-red" size={20}>
                    heroicons-outline:minus-circle
                  </FuseSvgIcon>
                  Not Visible
                </MenuItem>
                <MenuItem value={1} className="flex items-center gap-2">
                  <FuseSvgIcon className="text-green" size={20}>
                    heroicons-outline:minus-circle
                  </FuseSvgIcon>
                  Visible
                </MenuItem>
              </Select>
            </FormControl>
          )}
        />
        <Controller
          name="reservation_required"
          control={control}
          render={({ field }) => (
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Reservation Needed</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="reservation_required"
                label="reservation"
                value={field.value}
                onChange={field.onChange}
              >
                <MenuItem value={0} className="flex items-center gap-2">
                  <FuseSvgIcon className="text-red" size={20}>
                    heroicons-outline:minus-circle
                  </FuseSvgIcon>
                  Making Reservation not needed
                </MenuItem>
                <MenuItem value={1} className="flex items-center gap-2">
                  <FuseSvgIcon className="text-green" size={20}>
                    heroicons-outline:minus-circle
                  </FuseSvgIcon>
                  Making Reservation is a must
                </MenuItem>
              </Select>
            </FormControl>
          )}
        />
        <Controller
          name="adults_only"
          control={control}
          render={({ field }) => (
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Allow only Adults</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="adults_only"
                label="Adults"
                value={field.value}
                onChange={field.onChange}
              >
                <MenuItem value={0} className="flex items-center gap-2">
                  <FuseSvgIcon className="text-red" size={20}>
                    heroicons-outline:minus-circle
                  </FuseSvgIcon>
                  Everyone Allowed
                </MenuItem>
                <MenuItem value={1} className="flex items-center gap-2">
                  <FuseSvgIcon className="text-green" size={20}>
                    heroicons-outline:minus-circle
                  </FuseSvgIcon>
                  Only Adults allowed
                </MenuItem>
              </Select>
            </FormControl>
          )}
        />
      </div>
    </div>
  )
}

export default BasicInfoTab
