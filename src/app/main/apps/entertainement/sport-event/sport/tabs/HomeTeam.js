import { TextField } from '@mui/material'

import { Controller, useFormContext } from 'react-hook-form'
import { HomeTeamImage } from './ImageTab'

function TimingTab(props) {
  const methods = useFormContext()
  const { control } = methods

  return (
    <div>
      <Controller
        name="home_team_name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            autoFocus
            id="home_team_name"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <HomeTeamImage />
    </div>
  )
}

export default TimingTab
