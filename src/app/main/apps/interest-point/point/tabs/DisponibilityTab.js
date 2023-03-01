import { Checkbox, FormControlLabel } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

function DisponibilyTab(props) {
  const methods = useFormContext()
  const { control } = methods

  return (
    <div>
      <Controller
        name="point_status"
        control={control}
        render={({ field }) => {
          return (
            <FormControlLabel
              label="User Able To See"
              control={<Checkbox {...field} id="point_status" defaultChecked={!!field.value} />}
            />
          )
        }}
      />
    </div>
  )
}

export default DisponibilyTab
