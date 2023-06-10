import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

function BackgroundTab(props) {
  const methods = useFormContext()
  const { control } = methods

  return (
    <div>
      <Controller
        name="sport.sport_event_image"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth className="mt-8 mb-16">
            <InputLabel id="demo-simple-select-label">Background Theme</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="sport.sport_event_image"
              label="Background"
              placeholder="Select Theme"
              value={field.value}
              onChange={field.onChange}
            >
              {themeBackground.map((item, index) => (
                <MenuItem key={index} value={item.value}>
                  {/* make theme aligned using tailwind and improve typography with gap of 10px */}
                  <div className="flex flex-row items-center gap-10">
                    <img
                      src={item.value}
                      alt="theme background dark blue"
                      className="w-24 h-24 rounded-full"
                    />
                    <p className="flex text-md font-medium text-gray-700 ml-4 capitalize">
                      {item.item}
                    </p>
                  </div>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      />
    </div>
  )
}

export default BackgroundTab

const themeBackground = [
  {
    value: 'https://wallpapercave.com/wp/wp3006044.png',
    item: 'dark blue',
  },
  {
    value:
      'https://th.bing.com/th/id/R.41d67d00722eeaba574e15acbd5e939b?rik=26HansQdhAOhNQ&pid=ImgRaw&r=0',
    item: 'grey wavy',
  },
  {
    value:
      'https://www.teahub.io/photos/full/157-1570553_wallpaper-linear-black-gradient-red-dark-red.jpg',
    item: 'dark red',
  },
  {
    value:
      'https://th.bing.com/th/id/R.77edde43fa6abd952f42dc049f041df2?rik=rRIItUXCRzXx8g&pid=ImgRaw&r=0',
    item: 'light green gradient',
  },
]
