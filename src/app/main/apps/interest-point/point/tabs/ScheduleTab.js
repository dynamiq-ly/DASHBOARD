import TextField from '@mui/material/TextField'
import { Controller, useFormContext } from 'react-hook-form'

function ScheduleTab(props) {
  const methods = useFormContext()
  const { control } = methods

  return (
    <div>
      <Controller
        name="schedule.sunday"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="Sunday"
            autoFocus
            id="schedule.sunday"
            variant="outlined"
            fullWidth
          />
        )}
      />
      <Controller
        name="schedule.monday"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="Monday"
            autoFocus
            id="schedule.monday"
            variant="outlined"
            fullWidth
          />
        )}
      />
      <Controller
        name="schedule.tuesday"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="Tuesday"
            autoFocus
            id="schedule.tuesday"
            variant="outlined"
            fullWidth
          />
        )}
      />
      <Controller
        name="schedule.wednesday"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="Wednesday"
            autoFocus
            id="schedule.wednesday"
            variant="outlined"
            fullWidth
          />
        )}
      />
      <Controller
        name="schedule.thursday"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="Thursday"
            autoFocus
            id="schedule.thursday"
            variant="outlined"
            fullWidth
          />
        )}
      />
      <Controller
        name="schedule.friday"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="Friday"
            autoFocus
            id="schedule.friday"
            variant="outlined"
            fullWidth
          />
        )}
      />
      <Controller
        name="schedule.saturday"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="Saturday"
            autoFocus
            id="schedule.saturday"
            variant="outlined"
            fullWidth
          />
        )}
      />
    </div>
  )
}

export default ScheduleTab
