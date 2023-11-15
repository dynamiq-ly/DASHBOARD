import { Alert, AlertTitle, Checkbox, FormControlLabel } from '@mui/material'
import TextField from '@mui/material/TextField'

import { Controller, useFormContext } from 'react-hook-form'
import { useParams } from 'react-router-dom'

function BasicInfoTab(props) {
  const methods = useFormContext()
  const { control, getValues } = methods

  const { productId } = useParams()

  const isPdfEnabled = getValues('menu_a_la_carte')

  return (
    <div>
      {productId !== 'new' && isPdfEnabled && (
        <Controller
          name="delete_pdf"
          control={control}
          render={({ field }) => {
            return (
              <FormControlLabel
                label="Delete PDF Menu to enable the mobile application menu"
                control={<Checkbox {...field} id="delete_pdf" defaultChecked={!!field.value} />}
              />
            )
          }}
        />
      )}

      {getValues('menu_a_la_carte') && (
        <Alert severity="info">
          <AlertTitle>PDF file exsits</AlertTitle>A file already uploaded{' '}
          <a
            href={`${process.env.REACT_APP_STORAGE_UTELLS}/pdf/menus/bar/${getValues(
              'menu_a_la_carte'
            )}`}
            target="_blank"
            rel="noreferrer"
          >
            <strong>check it out!</strong>
          </a>{' '}
          You can override it by uploading a new oen
        </Alert>
      )}

      <Controller
        name="menu_a_la_carte"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            id="menu_a_la_carte"
            className="mt-8 mb-16"
            label="PDF Menu"
            fullWidth
            type="file"
            onChange={async (e) => {
              function readFileAsync() {
                return new Promise((resolve, reject) => {
                  const file = e.target.files[0]
                  if (!file) {
                    return
                  }

                  const reader = new FileReader()

                  reader.onload = () => {
                    resolve(file)
                  }

                  reader.onerror = reject

                  reader.readAsBinaryString(file)
                })
              }

              const newImage = await readFileAsync()

              onChange(newImage)
            }}
          />
        )}
      />
    </div>
  )
}

export default BasicInfoTab
