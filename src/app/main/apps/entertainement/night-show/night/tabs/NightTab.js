import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import TextField from '@mui/material/TextField'
import { Controller, useFormContext } from 'react-hook-form'

function NightTab(props) {
  const methods = useFormContext()
  const { control } = methods

  return (
    <div>
      <Controller
        name="show.night_show_performers"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="Performer Name"
            id="show.night_show_performers"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="show.night_show_genre"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth className="mt-8 mb-16">
            <InputLabel id="demo-simple-select-label">Genre</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="entertainement_age"
              label="Genre"
              placeholder="Select Genre"
              value={field.value}
              onChange={field.onChange}
            >
              <MenuItem value="KIDS">Not Specified</MenuItem>
              {nightShowGenres.map((genre, index) => (
                <MenuItem key={index} value={genre}>
                  {genre}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      />

      <Controller
        name="show.night_show_price"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="Ticket Price"
            type="number"
            id="show.night_show_price"
            variant="outlined"
            fullWidth
            helperText="Leave empty or put zero if no fees are needed."
          />
        )}
      />

      <Controller
        name="show.night_show_tickets"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="Ticket Number"
            type="number"
            id="show.night_show_tickets"
            variant="outlined"
            fullWidth
            helperText="Leave empty or put zero if places are not limited."
          />
        )}
      />

      <Controller
        name="show.night_show_link"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="Link"
            type="url"
            id="show.night_show_link"
            variant="outlined"
            fullWidth
            helperText="This is a referral link."
          />
        )}
      />

      <Controller
        name="show.night_show_video"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="Youtube Video"
            type="url"
            id="show.night_show_video"
            variant="outlined"
            fullWidth
            helperText="This is a link for a youtube video."
          />
        )}
      />
    </div>
  )
}

export default NightTab

const nightShowGenres = [
  'Comedy',
  'Drama',
  'Musical',
  'Dance',
  'Magic/Illusion',
  'Variety Show',
  'Cabaret',
  'Burlesque',
  'Circus',
  'Acrobatics',
  'Live Music/Concert',
  'Tribute Show',
  'Hypnosis',
  'Improvisation',
  'Puppetry',
  'Spoken Word/Poetry',
]
