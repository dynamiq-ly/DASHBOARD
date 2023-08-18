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
            label="Room Name"
            autoFocus
            id="name"
            variant="outlined"
            fullWidth
            helperText="Please specify the name of room"
          />
        )}
      />

      <Controller
        name="slug"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Room Slug"
            multiline
            rows={2}
            autoFocus
            id="slug"
            variant="outlined"
            fullWidth
            helperText="This is a required field"
          />
        )}
      />

      <Controller
        name="room_floor"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Room Floor"
            autoFocus
            id="room_floor"
            variant="outlined"
            fullWidth
            helperText="This is a required field"
          />
        )}
      />

      <Controller
        name="room_number"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Room Number"
            autoFocus
            id="floor_number"
            variant="outlined"
            fullWidth
            helperText="This is a required field"
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
            multiline
            rows={5}
            label="Room description"
            autoFocus
            id="description"
            variant="outlined"
            fullWidth
            helperText="This is a required field"
          />
        )}
      />

      <Controller
        name="config.upgrade-description"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            multiline
            rows={5}
            label="Room Upgrade description"
            autoFocus
            id="config.upgrade-description"
            variant="outlined"
            fullWidth
            helperText="This is a description for upgrade, you can leave it empty"
          />
        )}
      />

      <Controller
        name="virtual"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="3D View Link"
            autoFocus
            id="virtual"
            variant="outlined"
            fullWidth
            helperText="This is for the 3d view, you can leave it empty"
          />
        )}
      />
    </div>
  )
}

export default BasicInfoTab
