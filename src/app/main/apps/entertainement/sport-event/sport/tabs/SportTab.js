import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

function SportTab(props) {
  const methods = useFormContext()
  const { control } = methods

  return (
    <div>
      <Controller
        name="sport.sport_type"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth className="mt-8 mb-16">
            <InputLabel id="demo-simple-select-label">Sport Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="sport.sport_type"
              label="Sport Type"
              placeholder="Select Sport Type"
              value={field.value}
              onChange={field.onChange}
            >
              {sportTypes.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      />

      <Controller
        name="sport.sport_event"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Sport Event"
            autoFocus
            id="sport.sport_event"
            variant="outlined"
            fullWidth
          />
        )}
      />
    </div>
  )
}

export default SportTab

const sportTypes = [
  'Football',
  'Cricket',
  'Basketball',
  'Volleyball',
  'Tennis',
  'Badminton',
  'Kabaddi',
  'Table Tennis',
  'Hockey',
  'Baseball',
  'Golf',
  'Rugby',
  'Boxing',
  'MMA',
  'Wrestling',
  'Weightlifting',
  'Athletics',
  'Swimming',
  'Cycling',
  'Gymnastics',
  'Shooting',
  'Archery',
  'Fencing',
  'Judo',
  'Taekwondo',
  'Triathlon',
  'Sailing',
  'Canoeing',
  'Rowing',
  'Equestrian',
  'Pentathlon',
  'Skateboarding',
  'Sport Climbing',
  'Surfing',
  'Karate',
  'Softball',
]
