import { TextField } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

function TeamInfoTab(props) {
  const methods = useFormContext()
  const { control } = methods

  return (
    <div>
      <Controller
        name="sport.sport_event_home_team"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Home Team"
            autoFocus
            id="sport.sport_event_home_team"
            variant="outlined"
            fullWidth
            helperText="If the sport event does not have a home team, enter the name of the sport event here."
          />
        )}
      />

      <Controller
        name="sport.sport_event_away_team"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="Away Team"
            autoFocus
            id="sport.sport_event_away_team"
            variant="outlined"
            fullWidth
            helperText="Leave it empty if the sport event does not have an away team."
          />
        )}
      />
    </div>
  )
}

export default TeamInfoTab
